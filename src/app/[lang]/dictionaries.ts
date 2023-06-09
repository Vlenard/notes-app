const dictionaries = {
    en: () => import("./dictionaries/en.json").then(module => module.default),
    hu: () => import("./dictionaries/hu.json").then(module => module.default)
};

//@ts-ignore
export const getDictionary = async (locale: string) => dictionaries[locale.split("-")[0]]();