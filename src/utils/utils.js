const getInitials = name => {
    const names = name.split(" ");
    if (names.length === 1) return names[0][0];
    else if (name.length > 1) return `${names[0][0]}${names[1][0]}`;
    return 'A';
}

const responsive = {
    xl: {
        breakpoint: {min: 1200, max: 4000},
        items: 4
    },
    lg: {
        breakpoint: {max: 1200, min: 900},
        items: 3
    },
    md: {
        breakpoint: {max: 900, min: 600},
        items: 2
    },
    xs: {
        breakpoint: {max: 600, min: 0},
        items: 1
    }
};

const filterFoodByCountry = (meals, country) => {
    return meals.filter(meal => meal.country.toLowerCase() === country.toLowerCase());
}

export const UTILS = {
    getInitials,
    responsive,
    filterFoodByCountry
};
