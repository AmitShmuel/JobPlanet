import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BlockUiService} from '../utils/block-ui/block-ui.service';
import {ErrorHandlerService} from '../utils/error-handler.service';
import {Consts} from './consts';
import {SearchQuestionsQuery} from '../models/search-questions-query.model';
import {Question} from '../models/question.model';
import {Position} from '../models/position.model';
import {CreateTestQuery} from '../models/create-test-query.model';
import {Test} from '../models/test.model';
import {ProfileSettings} from '../models/profile-settings.model';
import {TestSolution} from '../models/test-solution.model';
import {RefObjectType} from './enums';
import {ParsedSkills, SkillMultiSelect} from '../models/skill.model';
import {SkillCategory} from '../models/skill-category.model';

@Injectable()
export class WebApiService {

    // skills:Skill[];

    constructor(private http: HttpClient,
                private blockUiService: BlockUiService,
                private errorHandlerService: ErrorHandlerService) {

        // Load skills
        // this.getSkills().subscribe(res => this.skills = res);
    }

    /*
        **************************************************
        *********************Settings***********************
        **************************************************
    */

    updateProfile(profile: ProfileSettings, blockUi: boolean) {
        if (blockUi) this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.post(`${Consts.WEB_SERVICE_URL}/profileSettings/updateDetails`, profile)
            .finally(() => {
                if (blockUi) this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Update Profile Failed');
            });
    }


    /*
        **************************************************
        *********************Skills***********************
        **************************************************
     */
    // getSkills() {
    //     this.blockUiService.start(Consts.BASIC_LOADING_MSG);
    //
    //     return this.http.get(`${Consts.WEB_SERVICE_URL}/skills`)
    //         .finally( () => this.blockUiService.stop() )
    //         .catch(error => {
    //             return this.errorHandlerService.handleHttpRequest(error, 'Skills Failed');
    //         });
    // }

    getCategoriesSkills() {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.get(`${Consts.WEB_SERVICE_URL}/skills/getAllCategories`)
            .map((skillsCategories:SkillCategory[]) => {
                let skills:SkillMultiSelect[] = [];
                skillsCategories.sort((c1, c2) => (c1.name < c2.name) ? -1 : (c1.name > c2.name) ? 1 : 0);
                for(let category of skillsCategories) {
                    category.skills.sort((s1, s2) => (s1.name < s2.name) ? -1 : (s1.name > s2.name) ? 1 : 0);
                    for(let skill of category.skills) {
                        let tmpSkill = new SkillMultiSelect(skill.id, skill.name, category.name);
                        skills.push(tmpSkill);

                    }
                }
                return new ParsedSkills(skills, skillsCategories);
            })
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Skills Failed');
            });
    }


    /*
        **************************************************
        *********************Questions********************
        **************************************************
    */
    searchQuestions(searchQuery: SearchQuestionsQuery) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.post(`${Consts.WEB_SERVICE_URL}/questions/searchQuestions`, searchQuery)
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Search Questions Failed');
            });
    }

    searchQuestionsForTest(searchQuery: CreateTestQuery) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.post(`${Consts.WEB_SERVICE_URL}/questions/SearchQuestionsForTest`, searchQuery)
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Search Questions For Test Failed');
            });
    }

    getInternalQuestions(stopBlockUi = true) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.get(`${Consts.WEB_SERVICE_URL}/questions/internalQuestions`)
            .finally(() => stopBlockUi && this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Getting Internal Questions Failed');
            });
    }

    getPublishedQuestions() {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.get(`${Consts.WEB_SERVICE_URL}/questions/publishedQuestions`)
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Getting Published Questions Failed');
            });
    }

    publishQuestion(question: Question, stopBlockUi = true) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.post(`${Consts.WEB_SERVICE_URL}/questions/publishQuestion`, question)
            .finally(() => {
                if (stopBlockUi) this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Publish Question Failed');
            });
    }

    getMyQuestions(isDone: boolean) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.get(`${Consts.WEB_SERVICE_URL}/questions/myQuestions/${isDone.toString()}`)
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Getting MyQuestions Failed');
            });
    }

    addQuestionToTodoList(questionId: number) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.post(`${Consts.WEB_SERVICE_URL}/questions/addToTodoList/${questionId.toString()}`, {})
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Add Question Failed');
            });
    }

    getCandidateQuestion(questionId: number) {

        return this.http.get(`${Consts.WEB_SERVICE_URL}/questions/candidateQuestion/${questionId.toString()}`, {})
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Get Candidate-Question Failed');
            });
    }

    postSolution(solutionData: { questionId: number; solution: string }) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.patch(`${Consts.WEB_SERVICE_URL}/questions/postSolution`, solutionData)
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Publish Answer Failed');
            });
    }

    postReview(reviewData: { questionId: number; rank: number; review: string }) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.patch(`${Consts.WEB_SERVICE_URL}/questions/postReview`, reviewData)
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Publish Review Failed');
            });
    }

    getQuestionStatistics(questionId: number) {

        let params = new HttpParams().set('questionId', questionId.toString());

        return this.http.get(`${Consts.WEB_SERVICE_URL}/questions/questionStatistics`, {params: params})
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Get Question Statistics failed');
            });
    }

    removeFromTodoList(questionId: number) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.delete(`${Consts.WEB_SERVICE_URL}/questions/removeFromTodoList/${questionId.toString()}`, {})
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Remove From Todo-List Failed');
            });
    }

    /*
    **************************************************
    *********************Attachments********************
    **************************************************
    */
    saveAttachment(file: File, refObjectType: number, refObjectId: number = null) {

        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        let formData: FormData = null;
        if (file != null) {
            formData = new FormData();
            formData.append('file', file);
        }
        return this.http.post(`${Consts.WEB_SERVICE_URL}/attachments/upload/${refObjectType}/${refObjectId ? '/' + refObjectId : ''}`,
            formData,
            {reportProgress: true, observe: 'events'})
            .catch(error => {
                this.blockUiService.stop();
                return this.errorHandlerService.handleHttpRequest(error, 'Upload Attachment Failed');
            });
    }

    getAttachmentContent(refObjectType: number, refObjectId: number = null) {
        return this.http.get(
            `${Consts.WEB_SERVICE_URL}/attachments/download/${refObjectType}${refObjectId ? '/' + refObjectId : ''}`,
            {reportProgress: true, observe: 'events', responseType: 'blob'})
            .finally(() => this.blockUiService.stop());
    }

    getAttachmentDetails(refObjectType: number, refObjectId: number = null) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.get(
            `${Consts.WEB_SERVICE_URL}/attachments/details/${refObjectType}${refObjectId ? '/' + refObjectId : ''}`,)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Get Attachment details failed');
            });
    }

    removeAttachment(refObjectType: RefObjectType, refObjectId:number = null, isBlockUiActive:boolean = false) {

        isBlockUiActive && this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.delete(
            `${Consts.WEB_SERVICE_URL}/attachments/remove/${refObjectType}${refObjectId ? '/' + refObjectId : ''}`,)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Remove attachment failed');
            });
    }

    /*
    **************************************************
    *********************Positions********************
    **************************************************
    */

    publishPosition(position: Position) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.post(`${Consts.WEB_SERVICE_URL}/positions/publishPosition`, position)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Publish Position Failed');
            });
    }

    getMyPositions() {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.get(`${Consts.WEB_SERVICE_URL}/positions`)
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Getting Positions Failed');
            });
    }


    getPositionById(id: number) {

        let params = new HttpParams().set('positionId', id.toString());

        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.get(`${Consts.WEB_SERVICE_URL}/positions/getPositionById`, {params: params})
            .finally(() => this.blockUiService.stop())
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, `Getting Position ${id} Failed`);
            });
    }

    /*
    **************************************************
    *********************Tests********************
    **************************************************
    */

    saveTest(test: Test) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.post(`${Consts.WEB_SERVICE_URL}/tests/createTest`, test)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Save Test Failed');
            });
    }

    saveTestSolution(testSolution: TestSolution) {
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.post(`${Consts.WEB_SERVICE_URL}/tests/createTestSolution`, testSolution)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Save Test Solution Failed');
            });
    }

    saveTestSolutionFeedback(testSolution: TestSolution) {

        delete testSolution.test;
        this.blockUiService.start(Consts.BASIC_LOADING_MSG);
        return this.http.post(`${Consts.WEB_SERVICE_URL}/tests/saveTestSolutionFeedback`, testSolution)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Save Test Solution Feedback Failed');
            });
    }

    /*
    **************************************************
    *********************Notifications********************
    **************************************************
    */

    getNotifications() {
        return this.http.get(`${Consts.WEB_SERVICE_URL}/notifications/getNotifications`)
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Get Notifications Failed');
            });
    }

    getRecommendationNotification(id:number) {

        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.get(`${Consts.WEB_SERVICE_URL}/notifications/getRecommendationNotification/${id}`)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Get Recommendation Notification Failed');
            });
    }

    updateNotificationFeedback(notificationId:number, isApproved:boolean) {

        return this.http.patch(`${Consts.WEB_SERVICE_URL}/notifications/updateFeedback/${notificationId}/${isApproved}`, {})
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Update notification feedback failed');
            });
    }


    /*
     **************************************************
     *********************Dashboard********************
     **************************************************
    */
    getCandidateDashboardData() {

        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.get(`${Consts.WEB_SERVICE_URL}/dashboard/candidateDashboardData`)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Get Candidate Dashboard Data Failed');
            });
    }

    getRecruiterDashboardData() {

        this.blockUiService.start(Consts.BASIC_LOADING_MSG);

        return this.http.get(`${Consts.WEB_SERVICE_URL}/dashboard/recruiterDashboardData`)
            .finally(() => {
                this.blockUiService.stop();
            })
            .catch(error => {
                return this.errorHandlerService.handleHttpRequest(error, 'Get Recruiter Dashboard Data Failed');
            });
    }
}