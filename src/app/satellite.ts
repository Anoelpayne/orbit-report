import { OrbitListComponent } from './orbit-list/orbit-list.component';

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    shouldShowWarning(): boolean {
        let inputType = this.type.toLowerCase();
        if (inputType === 'space debris') {
            this.warning = "red";
            return true;
        } else {
            return false;
        }
    }
}

