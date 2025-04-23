import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {createPromoRangeValidator} from '../../validators/date-range.validator';


@Component({
    selector: 'create-course-step-2',
    templateUrl: 'create-course-step-2.component.html',
    styleUrls: ['create-course-step-2.component.scss'],
    standalone: false
})
export class CreateCourseStep2Component implements OnInit {

    form = this.fb.group({
        courseType: ['premium', Validators.required]
    });

    constructor(private fb: FormBuilder) {

    }

  ngOnInit() {

  }

}
