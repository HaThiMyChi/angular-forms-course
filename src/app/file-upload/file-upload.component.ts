import {Component, Input} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';


@Component({
    selector: 'file-upload',
    templateUrl: "file-upload.component.html",
    styleUrls: ["file-upload.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: FileUploadComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: FileUploadComponent
        }
    ],
    standalone: false
})
export class FileUploadComponent {

    @Input() requiredFileType:string;

    fileName = '';
    fileUploadError = false;

    constructor(private http: HttpClient) {

    }

    onFileSelected(event) {
        const file: File = event.target.files[0];
        console.log('file', file)
        if (file) {
            this.fileName = file.name;
            // console.log(this.fileName);

            const formData = new FormData();
            formData.append("thumbnail", file);
     
            this.fileUploadError = false;

            this.http.post("http://localhost:9000/api/thumbnail-upload", formData)
                .pipe(
                    catchError(error => {
                        this.fileUploadError = true;
                        return of(error)
                    })
                )
                .subscribe();
        }
        
    }
}












