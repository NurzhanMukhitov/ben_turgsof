// Упрощенные данные для категорий
const categories = [
    {
        id: 1,
        title: "Agriculture",
        subtitle: "Enhancing Agricultural Water Use for Healthier Soil, Crops, and Livestock",
        image: "assets/images/engineering/thumbnails/agriculture.webp",
        imageLarge: "assets/images/engineering/large/agriculture.webp",
        imageHero: "assets/images/engineering/hero/agriculture.webp",
        description: "Innovative solutions for sustainable agricultural development.",
        content: {
            overview: "The agricultural sector faces the challenge of optimizing water use while maintaining sustainability to meet growing global demands. Since farming consumes 70% of the world's freshwater supply, integrating cutting-edge technologies and best practices is essential for long-term success. At Alsuro, we are dedicated to delivering solutions that help farmers maintain high standards of water quality, distribution, and management—even in the most demanding conditions.",
            approach: [
                "Smart irrigation systems",
                "Water quality management",
                "Resource optimization",
                "Sustainable farming practices",
                "Environmental monitoring"
            ],
            technologies: [
                "Advanced irrigation control",
                "Water treatment systems",
                "Monitoring and analytics",
                "Distribution automation",
                "Resource management tools"
            ],
            benefits: [
                "Improved water efficiency",
                "Enhanced crop health",
                "Sustainable practices",
                "Cost reduction",
                "Environmental protection"
            ]
        }
    },
    {
        id: 2,
        title: "Aquaculture",
        subtitle: "Comprehensive Water Management to Improve Yields and Reduce Disease Risks",
        image: "assets/images/engineering/thumbnails/aquaculture.webp",
        imageLarge: "assets/images/engineering/large/aquaculture.webp",
        imageHero: "assets/images/engineering/hero/aquaculture.webp",
        description: "Advanced systems for aquaculture and fish farming.",
        content: {
            overview: "Aquaculture is one of the fastest-growing food industries, now supplying 50% of the world's fish consumption. As demand for farmed seafood continues to rise at a pace exceeding that of other meat industries, producers face both significant opportunities and mounting risks. For decades, Alsuro has collaborated with fish farmers, equipment manufacturers, system integrators, well boat builders, and seafood processors. With over 40 years of expertise in land-based recirculating aquaculture systems (RAS), flow-through setups, and open-water cage farming, our Aquaculture Center of Excellence is at the forefront of innovation.",
            approach: [
                "Recirculating aquaculture systems (RAS)",
                "Water quality management",
                "Disease prevention",
                "Production optimization",
                "Sustainable practices"
            ],
            technologies: [
                "Advanced filtration systems",
                "Pathogen control solutions",
                "Sea lice treatment systems",
                "Water quality monitoring",
                "Environmental control systems"
            ],
            benefits: [
                "Increased production efficiency",
                "Improved fish health",
                "Reduced disease risks",
                "Sustainable operations",
                "Cost-effective solutions"
            ]
        }
    },
    {
        id: 3,
        title: "Aquatics & Pools",
        subtitle: "Maintaining Superior Water Quality for Recreational Facilities",
        image: "assets/images/engineering/thumbnails/aquatics_pools.webp",
        imageLarge: "assets/images/engineering/large/aquatics_pools.webp",
        imageHero: "assets/images/engineering/hero/aquatics_pools.webp",
        description: "Professional solutions for aquatic facilities and pools.",
        content: {
            overview: "Ensuring clean and safe water is essential for aquatic facilities of all types. Whether you manage a competitive swimming pool, water park, swim school, fitness center, zoo, or aquarium, Alsuro provides a full suite of solutions designed to meet your facility's unique needs. Effective filtration, disinfection, and water recirculation are crucial for maintaining both water and air quality in recreational settings.",
            approach: [
                "Water quality optimization",
                "Filtration system design",
                "Chemical balance management",
                "Energy efficiency solutions",
                "Safety compliance"
            ],
            technologies: [
                "Advanced filtration systems",
                "Chloramine reduction systems",
                "UV disinfection",
                "Energy-efficient pumps",
                "Water quality monitoring"
            ],
            benefits: [
                "Superior water quality",
                "Enhanced user safety",
                "Reduced operating costs",
                "Energy efficiency",
                "Improved visitor experience"
            ]
        }
    },
    {
        id: 4,
        title: "Buildings & Facilities",
        subtitle: "Customized Water Treatment for Safe and Efficient Facility Management",
        image: "assets/images/engineering/thumbnails/buildings_facilities.webp",
        imageLarge: "assets/images/engineering/large/buildings_facilities.webp",
        imageHero: "assets/images/engineering/hero/buildings_facilities.webp",
        description: "Comprehensive building and facility management solutions.",
        content: {
            overview: "Modern buildings and facilities require reliable water management systems to ensure safety, efficiency, and sustainability. From commercial buildings to educational institutions, Alsuro provides tailored solutions that address the unique water challenges faced by facility managers and building owners.",
            approach: [
                "System assessment and design",
                "Water quality management",
                "Efficiency optimization",
                "Preventive maintenance",
                "Compliance management"
            ],
            technologies: [
                "Water treatment systems",
                "Filtration solutions",
                "Monitoring and control",
                "Energy-efficient equipment",
                "Smart building integration"
            ],
            benefits: [
                "Improved water quality",
                "Reduced operational costs",
                "Extended equipment lifespan",
                "Regulatory compliance",
                "Enhanced sustainability"
            ]
        }
    },
    {
        id: 5,
        title: "Construction",
        subtitle: "Reliable Water Solutions to Tackle Construction Site Challenges",
        image: "assets/images/engineering/thumbnails/construction.webp",
        imageLarge: "assets/images/engineering/large/construction.webp",
        imageHero: "assets/images/engineering/hero/construction.webp",
        description: "Advanced water management solutions for construction projects.",
        content: {
            overview: "Construction projects face numerous water-related challenges, from dewatering and erosion control to water supply and wastewater management. Alsuro offers specialized solutions that help construction companies overcome these challenges while maintaining compliance with environmental regulations and project timelines.",
            approach: [
                "Site-specific assessment",
                "Temporary water systems",
                "Dewatering solutions",
                "Erosion and sediment control",
                "Environmental compliance"
            ],
            technologies: [
                "Pumping systems",
                "Filtration equipment",
                "Water treatment units",
                "Monitoring solutions",
                "Sediment control technologies"
            ],
            benefits: [
                "Project timeline adherence",
                "Regulatory compliance",
                "Cost-effective solutions",
                "Environmental protection",
                "Reduced water-related risks"
            ]
        }
    },
    {
        id: 6,
        title: "Energy & Power Generation",
        subtitle: "Innovative Water Solutions for Power and Energy Sectors",
        image: "assets/images/engineering/thumbnails/energy_power_generation.webp",
        imageLarge: "assets/images/engineering/large/energy_power_generation.webp",
        imageHero: "assets/images/engineering/hero/energy_power_generation.webp",
        description: "Comprehensive water solutions for energy production.",
        content: {
            overview: "The energy and power generation sector relies heavily on water for various processes, from cooling systems to steam production. Alsuro provides specialized water treatment and management solutions that enhance efficiency, reduce environmental impact, and ensure regulatory compliance across all types of power generation facilities.",
            approach: [
                "System optimization",
                "Water conservation",
                "Process improvement",
                "Environmental compliance",
                "Operational reliability"
            ],
            technologies: [
                "Cooling water treatment",
                "Boiler water systems",
                "Wastewater management",
                "Zero liquid discharge",
                "Advanced monitoring"
            ],
            benefits: [
                "Increased operational efficiency",
                "Reduced maintenance costs",
                "Extended equipment life",
                "Environmental compliance",
                "Water conservation"
            ]
        }
    },
    {
        id: 7,
        title: "Environment",
        subtitle: "Protecting Natural Resources with Advanced Water Solutions",
        image: "assets/images/engineering/thumbnails/environment.webp",
        imageLarge: "assets/images/engineering/large/environment.webp",
        imageHero: "assets/images/engineering/hero/environment.webp",
        description: "Environmental protection and resource management solutions.",
        content: {
            overview: "Environmental protection is at the core of sustainable water management. Alsuro develops and implements solutions that help organizations minimize their environmental footprint, protect natural water resources, and restore ecosystems affected by human activities.",
            approach: [
                "Ecosystem assessment",
                "Pollution prevention",
                "Resource conservation",
                "Remediation strategies",
                "Sustainable practices"
            ],
            technologies: [
                "Water quality monitoring",
                "Remediation systems",
                "Stormwater management",
                "Habitat restoration",
                "Pollution control"
            ],
            benefits: [
                "Ecosystem preservation",
                "Regulatory compliance",
                "Sustainable operations",
                "Community health protection",
                "Corporate responsibility"
            ]
        }
    },
    {
        id: 8,
        title: "Food & Beverage",
        subtitle: "Efficient Water and Wastewater Management for Food Production",
        image: "assets/images/engineering/thumbnails/food_and_beverage.webp",
        imageLarge: "assets/images/engineering/large/food_and_beverage.webp",
        imageHero: "assets/images/engineering/hero/food_and_beverage.webp",
        description: "Specialized solutions for food and beverage production.",
        content: {
            overview: "The food and beverage industry requires high-quality water for product formulation, processing, and cleaning operations. Alsuro provides comprehensive water and wastewater solutions that ensure product quality, safety, and regulatory compliance while optimizing resource use and reducing operational costs.",
            approach: [
                "Process water optimization",
                "Quality assurance",
                "Resource efficiency",
                "Wastewater management",
                "Compliance management"
            ],
            technologies: [
                "Purification systems",
                "CIP optimization",
                "Wastewater treatment",
                "Water reuse solutions",
                "Quality monitoring"
            ],
            benefits: [
                "Product quality assurance",
                "Regulatory compliance",
                "Reduced water consumption",
                "Lower operational costs",
                "Sustainable production"
            ]
        }
    },
    {
        id: 9,
        title: "General Industry",
        subtitle: "Reliable Water and Wastewater Solutions for Industrial Applications",
        image: "assets/images/engineering/thumbnails/general_industry.webp",
        imageLarge: "assets/images/engineering/large/general_industry.webp",
        imageHero: "assets/images/engineering/hero/general_industry.webp",
        description: "Comprehensive industrial water management solutions.",
        content: {
            overview: "Industrial operations across various sectors face common challenges in water management, including process water treatment, wastewater handling, and regulatory compliance. Alsuro offers versatile solutions that address these challenges while improving operational efficiency and sustainability.",
            approach: [
                "Process assessment",
                "System optimization",
                "Water conservation",
                "Compliance management",
                "Sustainable practices"
            ],
            technologies: [
                "Industrial water treatment",
                "Wastewater systems",
                "Water reuse solutions",
                "Monitoring and control",
                "Resource recovery"
            ],
            benefits: [
                "Operational reliability",
                "Cost reduction",
                "Regulatory compliance",
                "Environmental sustainability",
                "Resource optimization"
            ]
        }
    },
    {
        id: 10,
        title: "Healthcare",
        subtitle: "Advanced Water Purification for Critical Medical Operations",
        image: "assets/images/engineering/thumbnails/healthcare.webp",
        imageLarge: "assets/images/engineering/large/healthcare.webp",
        imageHero: "assets/images/engineering/hero/healthcare.webp",
        description: "Specialized water solutions for healthcare facilities.",
        content: {
            overview: "Healthcare facilities require ultra-pure water for various critical applications, from laboratory testing to equipment sterilization. Alsuro provides specialized water treatment solutions that meet the stringent quality standards of the healthcare industry while ensuring patient safety and operational efficiency.",
            approach: [
                "Quality assurance",
                "Infection control",
                "System reliability",
                "Compliance management",
                "Operational efficiency"
            ],
            technologies: [
                "Purification systems",
                "Sterilization solutions",
                "Dialysis water treatment",
                "Laboratory water systems",
                "Legionella prevention"
            ],
            benefits: [
                "Patient safety",
                "Regulatory compliance",
                "Operational reliability",
                "Cost efficiency",
                "Risk reduction"
            ]
        }
    },
    {
        id: 11,
        title: "Metals & Mining",
        subtitle: "Cost-Effective Water Management for Sustainable Mining Operations",
        image: "assets/images/engineering/thumbnails/metals_mining.webp",
        imageLarge: "assets/images/engineering/large/metals_mining.webp",
        imageHero: "assets/images/engineering/hero/metals_mining.webp",
        description: "Advanced solutions for mining and metal processing.",
        content: {
            overview: "The metals and mining industry faces unique water management challenges, from acid mine drainage to process water treatment and tailings management. Alsuro develops customized solutions that address these challenges while promoting sustainability, regulatory compliance, and operational efficiency.",
            approach: [
                "Site-specific assessment",
                "Water balance optimization",
                "Contaminant management",
                "Resource recovery",
                "Environmental protection"
            ],
            technologies: [
                "Acid mine drainage treatment",
                "Process water systems",
                "Tailings management",
                "Metal recovery solutions",
                "Water reuse technologies"
            ],
            benefits: [
                "Operational cost reduction",
                "Environmental compliance",
                "Resource conservation",
                "Sustainable operations",
                "Community relations improvement"
            ]
        }
    },
    {
        id: 12,
        title: "Microelectronics",
        subtitle: "High-Purity Water Solutions for the Semiconductor Industry",
        image: "assets/images/engineering/thumbnails/microelectronics.webp",
        imageLarge: "assets/images/engineering/large/microelectronics.webp",
        imageHero: "assets/images/engineering/hero/microelectronics.webp",
        description: "Ultra-pure water solutions for semiconductor manufacturing.",
        content: {
            overview: "The microelectronics and semiconductor industry requires ultra-pure water for manufacturing processes, where even microscopic contaminants can cause product defects. Alsuro provides advanced water purification systems that meet the exacting standards of this high-tech industry while optimizing resource use and operational efficiency.",
            approach: [
                "Contamination control",
                "Process optimization",
                "Quality assurance",
                "System reliability",
                "Resource efficiency"
            ],
            technologies: [
                "Ultra-pure water systems",
                "Advanced filtration",
                "Deionization technologies",
                "Monitoring solutions",
                "Water reclamation"
            ],
            benefits: [
                "Product quality improvement",
                "Yield enhancement",
                "Cost reduction",
                "Environmental sustainability",
                "Operational reliability"
            ]
        }
    },
    {
        id: 13,
        title: "Municipal Drinking Water",
        subtitle: "Delivering Safe and Reliable Drinking Water for Communities",
        image: "assets/images/engineering/thumbnails/municipal_drinking.webp",
        imageLarge: "assets/images/engineering/large/municipal_drinking.webp",
        imageHero: "assets/images/engineering/hero/municipal_drinking.webp",
        description: "Advanced solutions for municipal water treatment.",
        content: {
            overview: "Providing safe, clean drinking water is essential for public health and community well-being. Alsuro works with municipalities to design, implement, and maintain water treatment systems that ensure consistent water quality, regulatory compliance, and operational efficiency, even as communities grow and regulations evolve.",
            approach: [
                "Source water protection",
                "Treatment optimization",
                "Distribution management",
                "Quality assurance",
                "Community engagement"
            ],
            technologies: [
                "Filtration systems",
                "Disinfection solutions",
                "Distribution monitoring",
                "Smart water technologies",
                "Resource conservation"
            ],
            benefits: [
                "Public health protection",
                "Regulatory compliance",
                "Operational efficiency",
                "Infrastructure longevity",
                "Community trust"
            ]
        }
    },
    {
        id: 14,
        title: "Municipal Wastewater Treatment",
        subtitle: "Advanced Solutions for Sustainable Wastewater Management",
        image: "assets/images/engineering/thumbnails/municipal_wastewater.webp",
        imageLarge: "assets/images/engineering/large/municipal_wastewater.webp",
        imageHero: "assets/images/engineering/hero/municipal_wastewater.webp",
        description: "Comprehensive municipal wastewater treatment solutions.",
        content: {
            overview: "Effective wastewater treatment is crucial for environmental protection and public health. Alsuro provides municipalities with advanced solutions for collecting, treating, and managing wastewater, helping communities meet regulatory requirements while recovering valuable resources and protecting natural water bodies.",
            approach: [
                "Process optimization",
                "Energy efficiency",
                "Nutrient management",
                "Resource recovery",
                "Odor control"
            ],
            technologies: [
                "Biological treatment",
                "Nutrient removal",
                "Solids handling",
                "Water reuse systems",
                "Advanced monitoring"
            ],
            benefits: [
                "Environmental protection",
                "Regulatory compliance",
                "Operational cost reduction",
                "Resource recovery",
                "Community health"
            ]
        }
    },
    {
        id: 15,
        title: "Oil and Gas",
        subtitle: "Innovative Water Management for the Energy Sector",
        image: "assets/images/engineering/thumbnails/oil_gas.webp",
        imageLarge: "assets/images/engineering/large/oil_gas.webp",
        imageHero: "assets/images/engineering/hero/oil_gas.webp",
        description: "Specialized solutions for oil and gas operations.",
        content: {
            overview: "The oil and gas industry faces complex water management challenges throughout the exploration, production, and refining processes. Alsuro provides specialized solutions for produced water treatment, enhanced oil recovery, and process water management that improve operational efficiency while ensuring environmental compliance.",
            approach: [
                "Produced water management",
                "Process optimization",
                "Environmental protection",
                "Resource conservation",
                "Regulatory compliance"
            ],
            technologies: [
                "Produced water treatment",
                "Enhanced oil recovery",
                "Desalination systems",
                "Water reuse solutions",
                "Zero liquid discharge"
            ],
            benefits: [
                "Operational cost reduction",
                "Environmental compliance",
                "Water conservation",
                "Production efficiency",
                "Sustainable operations"
            ]
        }
    },
    {
        id: 16,
        title: "Pharmaceutical",
        subtitle: "Precision Water Solutions for Critical Pharmaceutical Processes",
        image: "assets/images/engineering/thumbnails/pharmaceutical.webp",
        imageLarge: "assets/images/engineering/large/pharmaceutical.webp",
        imageHero: "assets/images/engineering/hero/pharmaceutical.webp",
        description: "High-purity water solutions for pharmaceutical manufacturing.",
        content: {
            overview: "Water is a fundamental component in pharmaceutical manufacturing, used in everything from drug production and laboratory applications to equipment sterilization. Maintaining the highest standards of purity and compliance is essential to ensure product safety and effectiveness. Alsuro offers a full range of water treatment solutions tailored to the pharmaceutical industry's strict requirements.",
            approach: [
                "Quality assurance",
                "Process validation",
                "Compliance management",
                "System reliability",
                "Safety protocols"
            ],
            technologies: [
                "Purification systems",
                "Sterilization solutions",
                "Validation services",
                "Monitoring systems",
                "Compliance documentation"
            ],
            benefits: [
                "Product quality assurance",
                "Regulatory compliance",
                "Operational reliability",
                "Cost efficiency",
                "Risk reduction"
            ]
        }
    },
    {
        id: 17,
        title: "Refining & Chemicals",
        subtitle: "Ensuring Quality and Compliance in Chemical and Hydrocarbon Processing",
        image: "assets/images/engineering/thumbnails/refining_and_chemicals.webp",
        imageLarge: "assets/images/engineering/large/refining_and_chemicals.webp",
        imageHero: "assets/images/engineering/hero/refining_and_chemicals.webp",
        description: "Advanced solutions for chemical and refining processes.",
        content: {
            overview: "The refining and chemical industries rely on water for numerous processes, from cooling and steam generation to product formulation and equipment cleaning. Alsuro provides comprehensive water management solutions that enhance process efficiency, ensure product quality, and support environmental compliance in these demanding industrial environments.",
            approach: [
                "Process water optimization",
                "Cooling system management",
                "Wastewater treatment",
                "Resource recovery",
                "Compliance assurance"
            ],
            technologies: [
                "Cooling water treatment",
                "Boiler water systems",
                "Process water purification",
                "Wastewater treatment",
                "Water reuse solutions"
            ],
            benefits: [
                "Operational reliability",
                "Energy efficiency",
                "Regulatory compliance",
                "Cost reduction",
                "Environmental sustainability"
            ]
        }
    },
    {
        id: 18,
        title: "Transportation",
        subtitle: "Smart Water Solutions for the Transportation Industry",
        image: "assets/images/engineering/thumbnails/transportation.webp",
        imageLarge: "assets/images/engineering/large/transportation.webp",
        imageHero: "assets/images/engineering/hero/transportation.webp",
        description: "Specialized solutions for transportation applications.",
        content: {
            overview: "The transportation sector, including aviation, maritime, rail, and road transportation, faces unique water management challenges related to vehicle maintenance, facility operations, and environmental compliance. Alsuro provides specialized solutions that address these challenges while promoting operational efficiency and sustainability.",
            approach: [
                "Facility assessment",
                "System optimization",
                "Maintenance protocols",
                "Environmental compliance",
                "Resource conservation"
            ],
            technologies: [
                "Washwater treatment",
                "Stormwater management",
                "Wastewater recycling",
                "Ballast water treatment",
                "Deicing fluid recovery"
            ],
            benefits: [
                "Operational cost reduction",
                "Regulatory compliance",
                "Resource conservation",
                "Environmental protection",
                "Facility efficiency"
            ]
        }
    },
    {
        id: 19,
        title: "Utility Infrastructure",
        subtitle: "Revolutionizing Smart Water and Energy Management",
        image: "assets/images/engineering/thumbnails/utility_infrastructure.webp",
        imageLarge: "assets/images/engineering/large/utility_infrastructure.webp",
        imageHero: "assets/images/engineering/hero/utility_infrastructure.webp",
        description: "Innovative solutions for utility infrastructure.",
        content: {
            overview: "Modern utility infrastructure requires intelligent water and energy management systems to ensure reliability, efficiency, and sustainability. Alsuro provides advanced solutions for water distribution networks, smart metering, leak detection, and infrastructure monitoring that help utilities optimize operations and improve service delivery.",
            approach: [
                "Network assessment",
                "Smart system integration",
                "Efficiency optimization",
                "Asset management",
                "Resilience planning"
            ],
            technologies: [
                "Smart metering",
                "Leak detection systems",
                "Network monitoring",
                "Pressure management",
                "Data analytics"
            ],
            benefits: [
                "Operational efficiency",
                "Resource conservation",
                "Infrastructure longevity",
                "Service reliability",
                "Cost reduction"
            ]
        }
    }
];

module.exports = categories; 