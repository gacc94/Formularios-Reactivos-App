import {FormControl} from "@angular/forms";

export const namePattern: string ='([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noStrider = (control: FormControl): { noStrider: boolean } | null => {
    const val:string = control.value?.trim().toLowerCase();
    return (val==='strider') ? {noStrider: true,} : null;
};