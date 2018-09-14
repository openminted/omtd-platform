import { Identifiable } from "./identifiable";

export class FileStats extends Identifiable {
    archiveId: string;
    sizeOnDisk: number;
    size: number;
    fileCount: number;
    filename: string;
    info: Info[];
}

export class Info {
    fileType: string;
    count: number;
}