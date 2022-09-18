import * as termMethods from "../repositories/termRepository";

export async function getTerms() {
    const terms = await termMethods.getAllTerms();

    return terms;
}