// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "My interest lies in leveraging the growing repository of biological and environmental data to explore large-scale ecological and environmental questions. I am particularly interested in exploring new approaches to understanding ecological processes, understanding how biodiversity may shift under environmental change, and developing strategies addressing global environmental challenges.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching has been a deeply rewarding aspect of my doctoral journey, where I learned a great deal from both inspirational mentors and students. I gained experience in engaging with diverse audiences, including lower- and upper-level college students, graduate students, children and the general public.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "A small collection of bits and pieces with potential reuse value, including half-baked side projects, teaching materials, and data visualization tutorials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-mapping-roadkill-risk-in-taiwan-with-maxent",
        
          title: "Mapping roadkill risk in Taiwan with MaxEnt",
        
        description: "R workflow for mapping roadkill risk on Taiwan&#39;s highway network using MaxEnt (presence-only species distribution modeling)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/roadkill/";
          
        },
      },{id: "post-exploring-insect-wing-venation-with-persistent-homology",
        
          title: "Exploring insect wing venation with persistent homology",
        
        description: "Python workflow for detecting 2D topological structures of insect wings",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/wing-venation-tda/";
          
        },
      },{id: "post-phylogenetic-tree-with-trait-mapping",
        
          title: "Phylogenetic tree with trait mapping",
        
        description: "R workflow to visualize a phylogenetic tree with species-level trait data",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/phylo-trait-plot/";
          
        },
      },{id: "post-population-matrix-tutorial",
        
          title: "Population matrix tutorial",
        
        description: "A tutorial using blue crabs as example to explore population dynamics with population matrix (with R)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/population-matrix/";
          
        },
      },{id: "post-pairwise-beta-diversity-tutorial",
        
          title: "Pairwise beta diversity tutorial",
        
        description: "A tutorial explaining concept of Marion et al.&#39;s (2017) pairwise beta diversity (with R)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/pairwise-beta/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-unoccupied-spaces-in-trait-landscapes",
          title: 'Unoccupied spaces in trait landscapes',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-traits-as-drivers-of-macroecological-patterns",
          title: 'Traits as drivers of macroecological patterns',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-quantitative-approaches-to-sustainable-solutions",
          title: 'Quantitative approaches to sustainable solutions',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-animal-movement-behavior",
          title: 'Animal movement behavior',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-fieldwork",
          title: 'Fieldwork',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "teaching-human-anatomy",
          title: 'Human anatomy',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/1_teaching/";
            },},{id: "teaching-population-ecology",
          title: 'Population ecology',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2_teaching/";
            },},{id: "teaching-extinction-and-conservation",
          title: 'Extinction and conservation',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/3_teaching/";
            },},{id: "teaching-public-education-meterials-development",
          title: 'Public education meterials development',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/4_teaching/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%79%63%68%69%61@%75%6D%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/stephanie-y-chia", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Stephanie-Chia-6/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/stephchia", "_blank");
        },
      },{
        id: 'social-flickr',
        title: 'Flickr',
        section: 'Socials',
        handler: () => {
          window.open("https://www.flickr.com/stephaniechia", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
