import { Industry } from "./Industry";
import { Client } from "./Cliente";

class IndustrialClinet extends Industry implements Client {
    constructor(
        private insdustryNumber: number,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,

        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getIndustryNumber(): number {
        return this.insdustryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}