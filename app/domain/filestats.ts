export class FileStats {
    personIdentifier: string;
    archiveId: string;
    compressedFileSize: number;
    fileSize: number;
    fileCount: number;
    filename: string;
    info: Info[];
}

export class Info {
    fileType: string;
    count: number;
}