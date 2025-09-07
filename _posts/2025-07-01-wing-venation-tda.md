---
layout: post
title: Exploring insect wing venation with persistent homology
date: 2025-07-01
description: Python workflow for detecting 2D topological structures of insect wings
tags: TDA Python morphology insect
categories: workflow
thumbnail: assets/img/post/20250701/thumbnail.png
toc:
  sidebar: left
---

> Code & Notebook on [GitHub](https://github.com/stephchia/wing-venation-tda)

This post walks through a Python pipeline for analyzing insect wing venation using persistent homology, a tool from topological data analysis (TDA). By preprocessing wing images into 2D point clouds, we can detect loop structures in the venation using TDA. I demonstrate the method using wing images from a dragonfly, cicada, and grasshopper, and briefly discuss how their structural patterns are shown in persistence diagrams.

![wing1](/assets/img/post/20250701/01.jpg){:width="40%"} ![wing2](/assets/img/post/20250701/02.jpg){:width="15%"} ![wing3](/assets/img/post/20250701/03.jpg){:width="25%"}

###### Wing photo source: [Dragonfly](https://www.istockphoto.com/photo/macro-of-a-cordulegaster-bidentatas-wings-isolated-on-white-gm465101125-32958098), [Cicada](https://www.istockphoto.com/photo/isolated-cicada-or-fairy-wings-gm177017600-19789568), [Grasshopper](https://www.shutterstock.com/image-photo/wings-migratory-locust-locusta-migratoria-isolated-497422774)

---

## Procedure

Outline:

- Use _scikit-image_ to preprocess images
- Use _scikit-TDA_ (_ripser.py_ and _persim_) for topological data analysis

### 1. Process images

Let's use a forewing of dragonfly as the example. The image preprocessing includes the following steps:

1. Load image in grayscale
2. Denoise
3. Convert to binary image
4. Skeletonize
5. Make into point cloud

```python
import numpy as np
import matplotlib.pyplot as plt
from skimage import io, color, filters, morphology
from skimage.restoration import denoise_bilateral
from skimage.filters import threshold_local
from skimage.morphology import skeletonize
```

#### 1.1 Load image in grayscale

```python
img = io.imread("wing_dragonfly.jpg", as_gray=True)
```

![image](/assets/img/post/20250701/04.png){:width="80%"}

#### 1.2 Denoise

The printed image might not look much different before and after denoising, but it does clean out some dots within the venation windows later in the binary image, which would likely make some difference in TDA results.

```python
img_denoise = denoise_bilateral(img, sigma_color=0.05, sigma_spatial=15)
```

![image](/assets/img/post/20250701/05.png){:width="80%"}

#### 1.3 Convert to binary image

Instead of using a fixed global threshold (which may fail under uneven lighting), we apply **local thresholding**, which adapts based on the pixel's neighborhood. The local threshold is computed as the weighted mean of surrounding pixels (set by `block_size`), minus a constant (`offset`).

```python

local_thresh = threshold_local(img_denoise, block_size=35, offset=.001)
img_binary = img_denoise < local_thresh
```

![image](/assets/img/post/20250701/06.png){:width="80%"}

#### 1.4 Skeletonize

Skeletonization reduces each vein to a 1-pixel-wide path, preserving the structure while greatly reducing the number of points.

```python
img_skeleton = skeletonize(img_binary)
```

![image](/assets/img/post/20250701/07.png){:width="80%"}

#### 1.5 Convert to point cloud

```python
# Get coordinates of all foreground pixels (vein areas)
points = np.column_stack(np.nonzero(img_skeleton))  # shape: (N, 2)
```

![image](/assets/img/post/20250701/08.png){:width="80%"}

#### 1.6 Subsampling

Subsampling reduces computational cost in TDA, but there's a trade-off: too few points may miss topological features, while too many increase runtime. Choose `n_sample` based on dataset size and analysis goals.

```python
idx = np.random.choice(len(points), size=n_sample, replace=False)
points_sampled = points[idx]
```

![image](/assets/img/post/20250701/09.png){:width="80%"}

### 2. Topological data analysis (TDA)

We use **persistent homology** to identify loop-like structures in the wing’s point cloud. Specifically, we apply a **Vietoris–Rips filtration** to extract H0 (connected components) and H1 (loops). For background, see [intro video on TDA](https://www.youtube.com/watch?v=h0bnG1Wavag) by Matthew Wright.

```python
from ripser import ripser
from persim import plot_diagrams
```

```python
# Rips filtration
result = ripser(points_sampled, maxdim=1)  # setting maxdim=1 would detect H0 and H1 features
diagrams = result["dgms"]

# Plot persistent diagram
plt.figure(figsize=(5, 5))
plot_diagrams(diagrams, show=True, lifetime=True, size=5)
```

![image](/assets/img/post/20250701/10.png){:width="50%"}

The output persistent diagram shows each detected loops in orange dot (H1), with more "significant" features (those with longer lifespan across distance threshold) locating higher up in y axis, while the less significant or noise features lower down at the bottom. From the results, I suppose the highest two orange points represent the big windows at the top left of the wing.

### Applying the workflow to other insect wings

Now I apply the same procedure to process two additional wing images.

#### Grasshopper (hindwing)

- Image processing

![image](/assets/img/post/20250701/11.png){:width="100%"}

- Persistence digram

![image](/assets/img/post/20250701/12.png){:width="50%"}

#### Cicade (forewing)

- Image processing

![image](/assets/img/post/20250701/13.png){:width="70%"}

- Persistence digram

![image](/assets/img/post/20250701/14.png){:width="50%"}

The 15 orange dots higher up in the persistence diagram likely correspond to the 15 distinct windows in the cicada forewing. The dots near the bottom may represent noise or small structures near the wing base.

---

## Refleciton

- Point sampling density significantly affects the persistence diagram, especially the Birth values of H1 features. Choosing the sampling level is a trade-off between computational efficiency and topological fidelity.
  - In densely sampled images (e.g. cicada), true loop structures (wing windows) tend to appear as a vertical line of H1 points with low Birth values but varying Lifetime. Those with higher Birth values are likely to represent noise.
  - In contrast, sparser sampling spreads H1 features more broadly across the birth axis (e.g. grasshopper), making it harder to distinguish true biological structures from noise.
- In this particular case of analyzing wing venation with TDA, the actual venation information is probably mostly captured in the lifetime of H1 features (distribution along the y-axis), whereas the birth axis reflect point sampling density and information about how likely the signals are noise.
