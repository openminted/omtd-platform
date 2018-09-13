/**
 * Created by stefania on 09/05/2018.
 */
export interface HomePageStats {
    publications: number;
    components: Resources;
    applications: Resources;
}

export interface Resources {
    pub: number;
    priv: number;
}