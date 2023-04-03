export default class Preloader {

    constructor(options) {
        this.id = options.id,
        this.idChild = options.idChild,
        this.path = options.path
    }

    render() {
        //create div
        const containerPreloader = document.createElement('div');
        const subContainerPreloader = document.createElement('div');
        containerPreloader.append(subContainerPreloader);
        
        //id
        containerPreloader.id = this.id;
        subContainerPreloader.id = this.idChild;

        //style
        containerPreloader.classList.add('container_preloader');
        subContainerPreloader.classList.add('sub_container_preloader');

        //export в DOM дерево
        document.querySelector('body').append(containerPreloader);

        // lottie anim
        const animation = lottie;
        animation.loadAnimation({
            container: document.querySelector('#' + this.idChild),
            rendere: 'svg',
            loop: true,
            autoplay: true,
            path: this.path
        })

    }
}

const preload = new Preloader({
    id: 'container_preloader', 
    idChild: 'sub_container_preloader', 
    path: './assets/cruise.json'
});

preload.render();











