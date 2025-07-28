const categories = [
    {
        id: 1,
        title: 'Agriculture',
        subtitle: 'Enhancing Agricultural Water Use for Healthier Soil, Crops, and Livestock',
        image: 'assets/images/engineering/thumbnails/agriculture.webp',
        imageLarge: 'assets/images/engineering/large/agriculture.webp',
        imageHero: 'assets/images/engineering/hero/agriculture.webp',
        description: 'Innovative solutions for sustainable agricultural development',
        link: 'engineering/agriculture.html'
    },
    {
        id: 2,
        title: 'Aquaculture',
        subtitle: 'Comprehensive Water Management to Improve Yields and Reduce Disease Risks',
        image: 'assets/images/engineering/thumbnails/aquaculture.webp',
        imageLarge: 'assets/images/engineering/large/aquaculture.webp',
        imageHero: 'assets/images/engineering/hero/aquaculture.webp',
        description: 'Advanced systems for aquaculture and fish farming',
        link: 'engineering/aquaculture.html'
    },
    {
        id: 3,
        title: 'Aquatics & Pools',
        subtitle: 'Maintaining Superior Water Quality for Recreational Facilities',
        image: 'assets/images/engineering/thumbnails/aquatics_pools.webp',
        imageLarge: 'assets/images/engineering/large/aquatics_pools.webp',
        imageHero: 'assets/images/engineering/hero/aquatics_pools.webp',
        description: 'Professional solutions for aquatic facilities and pools',
        link: 'engineering/aquatics_pools.html'
    },
    {
        id: 4,
        title: 'Buildings & Facilities',
        subtitle: 'Customized Water Treatment for Safe and Efficient Facility Management',
        image: 'assets/images/engineering/thumbnails/buildings_facilities.webp',
        imageLarge: 'assets/images/engineering/large/buildings_facilities.webp',
        imageHero: 'assets/images/engineering/hero/buildings_facilities.webp',
        description: 'Comprehensive building and facility management solutions',
        link: 'engineering/buildings_facilities.html'
    },
    {
        id: 5,
        title: 'Construction',
        subtitle: 'Reliable Water Solutions to Tackle Construction Site Challenges',
        image: 'assets/images/engineering/thumbnails/construction.webp',
        imageLarge: 'assets/images/engineering/large/construction.webp',
        imageHero: 'assets/images/engineering/hero/construction.webp',
        description: 'Advanced water management solutions for construction projects',
        link: 'engineering/construction.html'
    },
    {
        id: 6,
        title: 'Energy & Power Generation',
        subtitle: 'Innovative Water Solutions for Power and Energy Sectors',
        image: 'assets/images/engineering/thumbnails/energy_power_generation.webp',
        imageLarge: 'assets/images/engineering/large/energy_power_generation.webp',
        imageHero: 'assets/images/engineering/hero/energy_power_generation.webp',
        description: 'Comprehensive water solutions for energy production',
        link: 'engineering/energy_power_generation.html'
    },
    {
        id: 7,
        title: 'Environment',
        subtitle: 'Protecting Natural Resources with Advanced Water Solutions',
        image: 'assets/images/engineering/thumbnails/environment.webp',
        imageLarge: 'assets/images/engineering/large/environment.webp',
        imageHero: 'assets/images/engineering/hero/environment.webp',
        description: 'Environmental protection and resource management solutions',
        link: 'engineering/environment.html'
    },
    {
        id: 8,
        title: 'Food & Beverage',
        subtitle: 'Efficient Water and Wastewater Management for Food Production',
        image: 'assets/images/engineering/thumbnails/food_beverage.jpg',
        imageLarge: 'assets/images/engineering/large/food_beverage.jpg',
        imageHero: 'assets/images/engineering/hero/food_beverage.jpg',
        description: 'Specialized solutions for food and beverage production',
        link: 'engineering/food_beverage.html'
    },
    {
        id: 9,
        title: 'General Industry',
        subtitle: 'Reliable Water and Wastewater Solutions for Industrial Applications',
        image: 'assets/images/engineering/thumbnails/general_industry.webp',
        imageLarge: 'assets/images/engineering/large/general_industry.webp',
        imageHero: 'assets/images/engineering/hero/general_industry.webp',
        description: 'Comprehensive industrial water management solutions',
        link: 'engineering/general_industry.html'
    },
    {
        id: 10,
        title: 'Healthcare',
        subtitle: 'Advanced Water Purification for Critical Medical Operations',
        image: 'assets/images/engineering/thumbnails/healthcare.webp',
        imageLarge: 'assets/images/engineering/large/healthcare.webp',
        imageHero: 'assets/images/engineering/hero/healthcare.webp',
        description: 'Specialized water solutions for healthcare facilities',
        link: 'engineering/healthcare.html'
    },
    {
        id: 11,
        title: 'Metals & Mining',
        subtitle: 'Cost-Effective Water Management for Sustainable Mining Operations',
        image: 'assets/images/engineering/thumbnails/metals_mining.webp',
        imageLarge: 'assets/images/engineering/large/metals_mining.webp',
        imageHero: 'assets/images/engineering/hero/metals_mining.webp',
        description: 'Advanced solutions for mining and metal processing',
        link: 'engineering/metals_mining.html'
    },
    {
        id: 12,
        title: 'Microelectronics',
        subtitle: 'High-Purity Water Solutions for the Semiconductor Industry',
        image: 'assets/images/engineering/thumbnails/microelectronics.webp',
        imageLarge: 'assets/images/engineering/large/microelectronics.webp',
        imageHero: 'assets/images/engineering/hero/microelectronics.webp',
        description: 'Ultra-pure water solutions for semiconductor manufacturing',
        link: 'engineering/microelectronics.html'
    },
    {
        id: 13,
        title: 'Municipal Drinking Water',
        subtitle: 'Delivering Safe and Reliable Drinking Water for Communities',
        image: 'assets/images/engineering/thumbnails/municipal_drinking_water.webp',
        imageLarge: 'assets/images/engineering/large/municipal_drinking_water.webp',
        imageHero: 'assets/images/engineering/hero/municipal_drinking_water.webp',
        description: 'Advanced solutions for municipal water treatment',
        link: 'engineering/municipal_drinking_water.html'
    },
    {
        id: 14,
        title: 'Municipal Wastewater Treatment',
        subtitle: 'Advanced Solutions for Sustainable Wastewater Management',
        image: 'assets/images/engineering/thumbnails/municipal_wastewater_treatment.webp',
        imageLarge: 'assets/images/engineering/large/municipal_wastewater_treatment.webp',
        imageHero: 'assets/images/engineering/hero/municipal_wastewater_treatment.webp',
        description: 'Comprehensive municipal wastewater treatment solutions',
        link: 'engineering/municipal_wastewater_treatment.html'
    },
    {
        id: 15,
        title: 'Oil and Gas',
        subtitle: 'Innovative Water Management for the Energy Sector',
        image: 'assets/images/engineering/thumbnails/oil_and_gas.webp',
        imageLarge: 'assets/images/engineering/large/oil_and_gas.webp',
        imageHero: 'assets/images/engineering/hero/oil_and_gas.webp',
        description: 'Specialized solutions for oil and gas operations',
        link: 'engineering/oil_and_gas.html'
    },
    {
        id: 16,
        title: 'Pharmaceutical',
        subtitle: 'Precision Water Solutions for Critical Pharmaceutical Processes',
        image: 'assets/images/engineering/thumbnails/pharmaceutical.webp',
        imageLarge: 'assets/images/engineering/large/pharmaceutical.webp',
        imageHero: 'assets/images/engineering/hero/pharmaceutical.webp',
        description: 'High-purity water solutions for pharmaceutical manufacturing',
        link: 'engineering/pharmaceutical.html'
    },
    {
        id: 17,
        title: 'Refining & Chemicals',
        subtitle: 'Ensuring Quality and Compliance in Chemical and Hydrocarbon Processing',
        image: 'assets/images/engineering/thumbnails/refining_chemicals.jpg',
        imageLarge: 'assets/images/engineering/large/refining_chemicals.jpg',
        imageHero: 'assets/images/engineering/hero/refining_chemicals.jpg',
        description: 'Advanced solutions for chemical and refining processes',
        link: 'engineering/refining_chemicals.html'
    },
    {
        id: 18,
        title: 'Transportation',
        subtitle: 'Smart Water Solutions for the Transportation Industry',
        image: 'assets/images/engineering/thumbnails/transportation.webp',
        imageLarge: 'assets/images/engineering/large/transportation.webp',
        imageHero: 'assets/images/engineering/hero/transportation.webp',
        description: 'Specialized solutions for transportation applications',
        link: 'engineering/transportation.html'
    },
    {
        id: 19,
        title: 'Utility Infrastructure',
        subtitle: 'Revolutionizing Smart Water and Energy Management',
        image: 'assets/images/engineering/thumbnails/utility_infrastructure.webp',
        imageLarge: 'assets/images/engineering/large/utility_infrastructure.webp',
        imageHero: 'assets/images/engineering/hero/utility_infrastructure.webp',
        description: 'Innovative solutions for utility infrastructure',
        link: 'engineering/utility_infrastructure.html'
    }
];

// Экспорт для браузера
if (typeof window !== 'undefined') {
    window.categories = categories;
}

// Экспорт для Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = categories;
} 