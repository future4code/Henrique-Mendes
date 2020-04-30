import { Mission } from "./Mission"

export class NightMission extends Mission {
    setName(name: string) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
    }
}