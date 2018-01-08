import { QueryEncoder } from "@angular/http";
/**
 * Created by stefanos on 2/3/2017.
 */
// import {allEnum} from "./omtd.enum";
/**
 * @see https://github.com/angular/angular/issues/11058
 */
export class GhQueryEncoder extends QueryEncoder {
    encodeKey(k: string): string {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v: string): string {
        v = super.encodeKey(v);
        return v.replace(/\+/gi, '%2B');
    }
}

export function transform(object : any ) : any {
    transformR(object);
    return object;
}

export function title(value : string) : string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getCookie(name: string) : string {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return null;
}

export function deleteCookie(name) {
    setCookie(name, '', -1);
}

export function randomString(length : number = 40) : string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
}

function transformR(object : any) : any {
    // if(object instanceof Object) {
    //     for (var v in object) {
    //         transformR(object[v]);
    //         if(typeof(object[v])!=="string" && object[v] != null) {
    //             let enumName = v.replace(/s$/, '') + 'Enum';
    //             console.log("checking " + enumName);
    //             if (allEnum[v] != undefined) {
    //                 object[v] = allEnum[v].find(v => v.key === object[v]).value;
    //                 console.log(object[v]);
    //             }
                
    //         }
    //     }
    // }
}