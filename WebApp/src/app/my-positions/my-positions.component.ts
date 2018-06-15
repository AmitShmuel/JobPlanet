import {Component, OnInit} from '@angular/core';
import {Position} from '../models/position.model';
import {SkillCategory} from '../models/skill-category.model';
import {WebApiService} from '../shared/web-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-my-positions',
    templateUrl: './my-positions.component.html',
    styleUrls: ['./my-positions.component.css']
})
export class MyPositionsComponent implements OnInit {

    tabType:string = null;
    tabOptions = ['position-list', 'create-position'];

    positions: Position[];
    skills = [];
    sortStrategy = null;
    orderStrategy:boolean = false;

    listType = '1';

    constructor(private webApiService: WebApiService,
                private activatedRoute:ActivatedRoute,
                private router:Router) { }

    ngOnInit() {

        this.tabType = this.activatedRoute.snapshot.params['type'];
        if(this.tabOptions.includes(this.tabType) == false)
            this.goToDefaultPage();
        this.activatedRoute.params.subscribe(params => {
            this.tabType = this.activatedRoute.snapshot.params['type'];
            if(this.tabOptions.includes(this.tabType) == false)
                this.goToDefaultPage();
        });

        this.getPositions();
        this.getSkills();

    }

    private goToDefaultPage() {
        this.router.navigate([`../${this.tabOptions[0]}`], {relativeTo: this.activatedRoute});
    }

    private getPositions() {
        this.webApiService.getMyPositions()
            .subscribe(
                (positions: Position[]) => {
                    this.positions = positions;
                    console.log(this.positions);
                }
            );
    }

    private getSkills() {
        this.webApiService.getCategoriesSkills()
            .subscribe(
                (skillsCategories: SkillCategory[]) => {
                    for (const category of skillsCategories) {
                        for (const skill of category.skills) {
                            const tmpSkill = {
                                id: skill.id,
                                name: skill.name,
                                category: category.name,
                            };
                            this.skills.push(tmpSkill);
                        }
                    }
                }
            );
    }

    pushPublishedPosition(position: Position) {
        this.positions.push(position);
    }
}
