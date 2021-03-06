import {ToastOptions} from 'ng2-toastr';

export class CustomToastOption extends ToastOptions {
    animate = 'flyLeft'; // you can override any options available
    newestOnTop = true;
    showCloseButton = true;
    positionClass = 'toast-bottom-left';
    toastLife = 10000;
}