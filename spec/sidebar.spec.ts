import {
    Component, EventHandler, Event, Property, setStyleAttribute, addClass, removeClass,
    isNullOrUndefined, EmitType, NotifyPropertyChanges, BaseEventArgs, INotifyPropertyChanged,
    Animation, AnimationModel, AnimationOptions, Browser
} from '@syncfusion/ej2-base';

import { Sidebar } from '../src/sidebar/sidebar';

describe("Sidebar DOM class Testing ", () => {
    let sidebar: any;
    beforeEach((): void => {
        let ele: HTMLElement = document.createElement("div");
        let sibin: HTMLElement = document.createElement("div");
        ele.innerHTML = "<h3>Testing of Sidebar</h3>"
        sibin.innerHTML = "Side bar";
        sibin.className = 'e-content-section';
        ele.id = "sidebar";
        ele.style.width = "300px";
        ele.style.height = "100%";
        document.body.style.margin = "0px";
        let div: any = document.createElement('div');
        let span: any = document.createElement('span');
        div.className = 'e-context-element';
        div.appendChild(span);
        document.body.appendChild(div);
        document.body.appendChild(ele);
        document.body.appendChild(sibin);
    });
    afterEach((): void => {
        if (sidebar) {
            sidebar.destroy();
        }
        document.body.innerHTML = "";
    });
    //width test case 
    it("Sidebar width test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ width: '250px' }, ele);
        sidebar.show();
        expect(document.getElementById('sidebar').style.width).toBe("250px");
    });
    it("Sidebar default width test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({}, ele);
        sidebar.show();
        expect(document.getElementById('sidebar').style.width).toBe("auto");
    });

    it("Sidebar width onproperty change test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({}, ele);
        sidebar.width = "500px";
        sidebar.dataBind();
        sidebar.show();
        expect(document.getElementById('sidebar').style.width).toBe("500px");
    });

    // animation test case
    it("Sidebar with animation disabled test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ animation: false, type: 'push' }, ele);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-disable-animation')).toBe(true);
    });

    // e-visibility test case
    it("Sidebar with e-visibility test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'push' }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-visibility')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-visibility')).toBe(false);
    });

    //e-visibility test case
    it("Sidebar with e-visibility test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'auto' }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-visibility')).toBe(false);
    });


    //mediaQuery test case
    it("Sidebar with auto type and mediaQuery test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'auto', mediaQuery: window.matchMedia(('min-width:1400px')) }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-visibility')).toBe(false);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
    });

    // animation onproperty change test case

    it("Sidebar with animation disabled test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ animation: false, type: 'push' }, ele);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-disable-animation')).toBe(true);
        sidebar.animation = true;
        sidebar.dataBind();
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-disable-animation')).toBe(false);
        sidebar.hide();
        sidebar.dataBind();
        expect(document.getElementById('sidebar').classList.contains('e-disable-animation')).toBe(false);
    });

    it("Sidebar slide type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide" }, ele);
        sidebar.show();
        // expect(document.body.scrollWidth == ele.clientWidth + document.body.clientWidth && new WebKitCSSMatrix(window.getComputedStyle(sibling).webkitTransform).m41 == ele.offsetWidth).toEqual(true);
    });

    //enableGestures test case

    it("Sidebar enableGestures test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableGestures: true, type: "push" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-touch')).toBe(true);
        //onProperty test case
        sidebar.enableGestures = false;
        sidebar.dataBind();
        expect(document.getElementById('sidebar').classList.contains('e-touch')).toBe(false);
    });

    it("Sidebar with swipe towards right direction test case", () => {
        let touch: any = {
            preventDefault: (): void => { /** NO Code */ },
            currentTarget: null,
            target: document.body,
            stopPropagation: (): void => { /** NO Code */ },
            swipeDirection: 'Right',
            startX: 20,
            distanceX: 60,
            velocity: 0.5
        };
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableGestures: true, type: "push" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-touch')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        sidebar.enableGestureHandler(touch);
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
    });


    it("Sidebar with swipe towards left direction test case", () => {
        let touch: any = {
            preventDefault: (): void => { /** NO Code */ },
            currentTarget: null,
            target: document.body,
            stopPropagation: (): void => { /** NO Code */ },
            swipeDirection: 'Left',
            startX: 20,
            distanceX: 60,
            velocity: 0.5
        };
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableGestures: true, type: "push" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-touch')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        sidebar.enableGestureHandler(touch);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
    });
    it("Sidebar with swipe towards left direction with right position  test case", () => {
        let touch: any = {
            preventDefault: (): void => { /** NO Code */ },
            currentTarget: null,
            target: document.body,
            stopPropagation: (): void => { /** NO Code */ },
            swipeDirection: 'Left', startX: 20,
            distanceX: 60,
            velocity: 0.5
        };
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableGestures: true, position: 'right', type: "push" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-touch')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        sidebar.enableGestureHandler(touch);
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
    });
    it("Sidebar with swipe towards left direction with right position  test case", () => {
        let touch: any = {
            preventDefault: (): void => { /** NO Code */ },
            currentTarget: null,
            target: document.body,
            stopPropagation: (): void => { /** NO Code */ },
            swipeDirection: 'Right', startX: 20,
            distanceX: 60,
            velocity: 0.5
        };
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableGestures: true, position: 'right', type: "push" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-touch')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        sidebar.enableGestureHandler(touch);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
    });

    it("Sidebar Base property Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        sidebar = new Sidebar({}, ele);
        expect(sidebar.type == 'auto').toEqual(true);
        expect(sidebar.position == 'left').toEqual(true);
        expect(isNullOrUndefined(document.getElementById('sidebar'))).toEqual(false);
        expect(isNullOrUndefined(sidebar.height)).toEqual(false);
        expect(isNullOrUndefined(sidebar.width)).toEqual(false);
        expect(isNullOrUndefined(sidebar.showBackdrop)).toEqual(false);
        expect(sidebar.mediaQuery == null).toEqual(true);
    });
    it("Sidebar slide type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide" }, ele);
        sidebar.show();
        // expect(document.body.scrollWidth == ele.clientWidth + document.body.clientWidth && new WebKitCSSMatrix(window.getComputedStyle(sibling).webkitTransform).m41 == ele.offsetWidth).toEqual(true);
    });
    it("Sidebar slide type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", }, ele);
        // expect(document.body.scrollWidth == document.body.clientWidth).toEqual(false);
    });
    it("Sidebar push type testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push" }, ele);
        sidebar.show();
    });
    it("Sidebar over type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over" }, ele);
        sidebar.show();
        expect(document.body.clientWidth == sibling.clientWidth).toEqual(true);
    });

    it("Sidebar over type with left position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "auto", width: '300px' }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').classList.contains('e-push')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");

    });

    it("Sidebar over type with right position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "auto", width: '300px', position: "right" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 300px 0px 0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').classList.contains('e-push')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");

    });

    it("Sidebar openOnInit with push type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push" }, ele);
        expect(ele.classList.contains("e-close")).toEqual(true);
    });
    it("Sidebar openOnInit with slide type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        sidebar = new Sidebar({ type: "slide" }, ele);
        // expect(new WebKitCSSMatrix(window.getComputedStyle(sibling).webkitTransform).m41 == (ele.offsetWidth)).toEqual(true);
    });
    it("Sidebar openOnInit over type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        sidebar = new Sidebar({ type: "over" }, ele);
        sidebar.show();
        expect(document.body.clientWidth == sibling.clientWidth).toEqual(true);
    });
    it("Sidebar e-dock Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableDock: true }, ele);
        expect(ele.classList.contains("e-dock")).toEqual(true);
        expect(ele.style.transform).toBe("");
    });

    it("Sidebar without dock size test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableDock: true }, ele);
        expect(ele.classList.contains("e-dock")).toEqual(true);
        expect(ele.style.width).toEqual("auto");
        expect(ele.style.transform).toBe("");
    });

    it("Sidebar with dock size(250px) test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableDock: true, dockSize: "250px" }, ele);
        expect(ele.classList.contains("e-dock")).toEqual(true);
        expect(ele.style.width).toEqual("250px");
        expect(ele.style.transform).toBe("translateX(-100%) translateX(250px)");
    });

    it("Sidebar with dock size test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ enableDock: true, dockSize: '300' }, ele);
        expect(ele.classList.contains("e-dock")).toEqual(true);
        expect(ele.style.width).toEqual("300px");
    });

    //mediaQuery test case
    it("Sidebar  with mediaQuery greater than 700px test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'push', mediaQuery: window.matchMedia('(min-width:700px)') }, ele);
        expect(ele.classList.contains("e-open")).toEqual(true);
    });

    it("Sidebar  with mediaQuery less than 400px test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'push', mediaQuery: window.matchMedia('(max-width:400px)') }, ele);
        expect(ele.classList.contains("e-close")).toEqual(true);
    });
    it("Sidebar  with mediaQuery less than 400px test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'auto', mediaQuery: window.matchMedia('(max-width:400px)') }, ele);
        expect(ele.classList.contains("e-close")).toEqual(true);
        sidebar.mediaQuery = window.matchMedia('(min-width:700px)');
        sidebar.dataBind();
        expect(ele.classList.contains("e-open")).toEqual(true);
    });

    // position Testing
    it("Sidebar position:right Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", position: "right" }, ele);

        sidebar.show();
        // expect(new WebKitCSSMatrix(window.getComputedStyle(sibling).webkitTransform).m41 == -(ele.offsetWidth)).toEqual(true);
    });
    it("Sidebar position:right push type width Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", position: "right" }, ele);
        sidebar.show();
    });
    it("Sidebar position:right over type width Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over", position: "right" }, ele);
        sidebar.show();
        expect(document.body.clientWidth == sibling.clientWidth).toEqual(true);
    });

    it("Sidebar position:right inital open Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        sidebar = new Sidebar({ type: "push", position: "right" }, ele);
        expect(ele.classList.contains("e-close")).toEqual(true);
    });

    it("Sidebar position:right && openOnInit with slide type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", position: "right" }, ele);
    });
    it("Sidebar position:right && openOnInit , push type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", position: "right" }, ele);
    });
    it("Sidebar position:right && openOnInit and over type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over", position: "right" }, ele);
        expect(document.body.clientWidth == sibling.clientWidth).toEqual(true);
    });
    //context property test case
    it("Sidebar context propert test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", position: "right", contextTo: document.querySelector('.e-context-element') }, ele);
        expect(document.querySelectorAll('.e-context-element .e-sidebar')[0].classList.contains('e-sidebar')).toBe(true);
        expect(document.querySelectorAll('.e-context-element')[0].classList.contains('e-context-relative')).toBe(true);
        expect(document.querySelectorAll('.e-context-element .e-sidebar')[0].classList.contains('e-context-absolute')).toBe(true);
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).classList.contains('e-content')).toBe(true);
        sidebar.show();
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.transform).toBe('translateX(0px)');
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.margin).toBe((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.margin);
        sidebar.hide();
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.transform).toBe('translateX(0px)');
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.margin).toBe('0px');
    });

    //context property test case
    it("Sidebar context with backdrop propert test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", position: "right", contextTo: document.querySelector('.e-context-element'), showBackdrop: true }, ele);
        expect(document.querySelectorAll('.e-context-element .e-sidebar')[0].classList.contains('e-sidebar')).toBe(true);
        expect(document.querySelectorAll('.e-context-element')[0].classList.contains('e-context-relative')).toBe(true);
        expect(document.querySelectorAll('.e-context-element .e-sidebar')[0].classList.contains('e-context-absolute')).toBe(true);
        sidebar.show();
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.transform).toBe('translateX(0px)');
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.margin).toBe((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.margin);
        expect((document.getElementById('sidebar').nextElementSibling.classList.contains('e-backdrop'))).toBe(true);
        sidebar.hide();
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.transform).toBe('translateX(0px)');
        expect((<HTMLElement>document.getElementById('sidebar').nextElementSibling).style.margin).toBe('0px');
        expect((document.getElementById('sidebar').nextElementSibling.classList.contains('e-backdrop'))).toBe(false);

    });

    //BACKDROP
    it("Sidebar backdrop testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", showBackdrop: true }, ele);
        expect(sibling.classList.contains('e-overlay')).toEqual(false);
        sidebar.hide();
        expect(sibling.classList.contains('e-overlay')).toEqual(false);
        sidebar.show();
        expect((<HTMLElement>document.querySelector('.e-sidebar-overlay')).style.display).toEqual('block');
        expect(((<HTMLElement>document.querySelector('.e-sidebar-overlay')).classList.contains('e-sidebar-overlay'))).toBe(true);
        //onproperty changes
        sidebar.showBackdrop = false;
        sidebar.dataBind();
        sidebar.show();
        expect(sibling.classList.contains('e-overlay')).toEqual(false);
        sidebar.hide();
        expect(sibling.classList.contains('e-overlay')).toEqual(false);
        sidebar.show();
        sidebar.showBackdrop = true;
        sidebar.dataBind();
        expect((<HTMLElement>document.querySelector('.e-sidebar-overlay')).style.display).toEqual('block');
        sidebar.show();
        expect((<HTMLElement>document.querySelector('.e-sidebar-overlay')).style.display).toEqual('block');
        sidebar.hide();
        expect(sibling.classList.contains('e-overlay')).toEqual(false);
    });

    //persisitence test case
    it("Sidebar persisitence test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", enablePersistence: true }, ele);
        //onproperty change      
        sidebar.type = "over"
        sidebar.dataBind();
        sidebar.destroy();
        sidebar = new Sidebar({ enablePersistence: true }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-over')).toBe(true);
    });

    // enableDock onproperty changes test case
    it("Sidebar zindex property test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'over', zIndex: '300' }, ele);
        sidebar.enableDock = true;
        sidebar.dataBind();
        expect(sidebar.enableDock).toEqual(true);
    })

    // zindex property test case
    it("Sidebar zindex property test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'over', zIndex: '300' }, ele);
        sidebar.show();
        expect(ele.classList.contains("e-open") && sidebar.isOpen()).toEqual(true);
        expect(document.getElementById('sidebar').style.zIndex).toEqual('300');
        sidebar.type = "push";
        sidebar.dataBind();
        expect(document.getElementById('sidebar').style.zIndex).toEqual('300');
        //onproperty change test case
        sidebar.zIndex = '100';
        sidebar.dataBind();
        expect(document.getElementById('sidebar').style.zIndex).toEqual('100');

    })
    // show method testing
    it("Sidebar show with show testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        sidebar = new Sidebar({}, ele);
        sidebar.show();
        expect(ele.classList.contains("e-open") && sidebar.isOpen()).toEqual(true);
    });
    // hide method testing
    it("Sidebar hide method testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({}, ele);
        sidebar.hide();
        expect(ele.classList.contains("e-close") && !sidebar.isOpen()).toEqual(true);
    });

    //toggle testing
    it("Sidebar hide method testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'push' }, ele);
        sidebar.toggle()
        expect(ele.classList.contains("e-open") && sidebar.isOpen()).toEqual(true);
    });


    it("Sidebar hide method testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'auto' }, ele);
        sidebar.toggle();
        expect(ele.classList.contains("e-close") && !sidebar.isOpen()).toEqual(true);
        sidebar.toggle();
        expect(ele.classList.contains("e-open") && sidebar.isOpen()).toEqual(true);
        sidebar.toggle();
        expect(ele.classList.contains("e-close") && !sidebar.isOpen()).toEqual(true);

    });

    //toggle testing
    it("Sidebar hide method testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({}, ele);
        sidebar.toggle();
        expect(ele.classList.contains("e-close") && !sidebar.isOpen()).toEqual(true);
    });

    it("Sidebar hide method testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({}, ele);
        sidebar.show();
        sidebar.toggle();
        expect(ele.classList.contains("e-close") && !sidebar.isOpen()).toEqual(true);
    });

    it("Sidebar hide method testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'push' }, ele);
        sidebar.toggle();
        expect(ele.classList.contains("e-open")).toEqual(true);
    });
    // isOpen testing

    it("Sidebar isOpen with show testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        sidebar = new Sidebar({}, ele);
        sidebar.show();
        expect(ele.classList.contains("e-open") && sidebar.isOpen()).toEqual(true);
    });

    it("Sidebar isOpen with hide testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        sidebar = new Sidebar({}, ele);
        sidebar.hide();
        expect(!ele.classList.contains("e-open") && !sidebar.isOpen()).toEqual(true);
    });
    // open on init with auto close option 

    it("Sidebar isOpen with hide testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        // sidebar = new Sidebar({ mediaQuery:null},ele);
        expect(!ele.classList.contains("e-open") && !sidebar.isOpen()).toEqual(true);
    });
    it("Sidebar isOpen with mediaQuery null testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        sidebar = new Sidebar({ mediaQuery: null, type: 'push' }, ele);
        expect(ele.classList.contains("e-close")).toEqual(true);
    });
    it("Sidebar isOpen with mediaQuery 500 to 800 string testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        let ac: MediaQueryList = window.matchMedia('(min-width:500px) and (max-width:1300px)');
        sidebar = new Sidebar({ mediaQuery: ac, type: 'push' }, ele);
        expect(ele.classList.contains("e-open")).toEqual(true);
    });
    it("Sidebar isOpen with mediaQuery screen size testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        let ac: MediaQueryList = window.matchMedia('(min-width:' + (screen.width - 100) + 'px) and (max-width:' + (screen.width + 100) + 'px)');
        // sidebar = new Sidebar({ mediaQuery:ac},ele);
        expect(ele.classList.contains("e-close")).toEqual(false);
    });
    it("Sidebar isOpen with mediaQuery maximum testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;

        let ac: MediaQueryList = window.matchMedia('(min-width:' + (screen.width + 100) + 'px) and (max-width:' + (screen.width + 500) + 'px)');
        // sidebar = new Sidebar({ mediaQuery:ac},ele);
        // expect(ele.classList.contains("e-close")).toEqual(true);
    });
    // set model

    it("Sidebar  with dynamic type slide Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: 'slide' }, ele);
        // sidebar.type = 'slide';
        // expect(document.body.scrollWidth == document.body.clientWidth).toEqual(false);
    });
    it("Sidebar  with dynamic type push testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({}, ele);
        sidebar.type = 'push';
        sidebar.dataBind();
        // expect(document.body.clientWidth == sibling.clientWidth && window.getComputedStyle(sibling).getPropertyValue('padding-left') == window.getComputedStyle(ele).width).toEqual(true);
    });
    it("Sidebar dynamic over type Testing", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", }, ele);
        // expect(document.body.clientWidth == sibling.clientWidth && window.getComputedStyle(sibling).getPropertyValue('padding-left') == window.getComputedStyle(ele).width).toEqual(true);
        sidebar.type = 'over';
        sidebar.dataBind();
        // expect(document.body.clientWidth == sibling.clientWidth).toEqual(true);
    });
    // closeOnDocumentClick property test case
    it("Sidebar closeOnDocumentClick Testing", () => {
        let sidebar: any;
        let mouseEventArgs: any = {
            preventDefault: (): void => { /** NO Code */ },
            currentTarget: null,
            target: document.body,
            stopPropagation: (): void => { /** NO Code */ }
        };

        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", closeOnDocumentClick: true }, ele);
        sidebar.documentclickHandler(mouseEventArgs);
        expect(ele.classList.contains("e-close")).toEqual(true);
    });
    // enableDock property test case
    it("Sidebar push type with dock type test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", enableDock: true, dockSize: 300 }, ele);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(300px)");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 300px");
    });


    // open event test case
    it("Sidebar open event test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({
            type: "push", open: function (args: any) {
                expect(args.name).toBe("open");
            }
        }, ele);
        sidebar.show();
    });
    // close event test case
    it("Sidebar close event test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({
            type: "push", close: function (args: any) {
                expect(args.name).toBe("close");
            }
        }, ele);
        sidebar.hide();
    });

    // change event test case
    it("Sidebar change event test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({
            type: "push", change: function (args: any) {
                expect(args.name).toBe("change");
            }
        }, ele);
        sidebar.show();
    });

    it("Sidebar slide type with dock type test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", enableDock: true, dockSize: 300, width: "300px" }, ele);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(300px)");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(300px)");
        expect(document.getElementById('sidebar').classList.contains('e-slide')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toBe(true);
    });

    it("Sidebar over type with dock type test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over", enableDock: true, dockSize: 300, width: '300px' }, ele);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(300px)");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 300px");
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        expect(document.getElementById('sidebar').classList.contains('e-over')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toBe(true);
    });

    it("Sidebar with 'push' type , 'left' position and dock enabled test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", enableDock: true, dockSize: 300, width: '300px' }, ele);
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(300px)");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 300px");
        expect(document.getElementById('sidebar').classList.contains('e-push')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toBe(true);
    });

    it("Sidebar with 'push' type , 'right' position and dock enabled test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", enableDock: true, position: 'right', dockSize: 300, width: '300px' }, ele);
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(100%) translateX(-300px)");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 300px 0px 0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 300px 0px 0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(100%) translateX(-300px)");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 300px 0px 0px");
        expect(document.getElementById('sidebar').classList.contains('e-push')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-right')).toBe(true);
    });

    it("Sidebar with 'slide' type , 'left' position and dock enabled test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", enableDock: true, dockSize: 300, width: '300px' }, ele);
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(300px)");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(300px)");
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(300px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(300px)");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(300px)");
        expect(document.getElementById('sidebar').classList.contains('e-slide')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toBe(true);
    });
    it("Sidebar with  'slide' type , 'right' position and dock enabled test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", enableDock: true, dockSize: 200, width: '300px', position: "right" }, ele);
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(100%) translateX(-200px)");
        expect(document.getElementById('sidebar').style.width).toEqual("200px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(-200px)");
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(-300px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(100%) translateX(-200px)");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(-200px)");
        expect(document.getElementById('sidebar').classList.contains('e-slide')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-right')).toBe(true);
    });

    it("Sidebar with  'over' type , 'left' position and dock enabled test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over", enableDock: true, dockSize: 200, width: '300px' }, ele);
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(200px)");
        expect(document.getElementById('sidebar').style.width).toEqual("200px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 200px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(-100%) translateX(200px)");
        expect(document.getElementById('sidebar').style.width).toEqual("200px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 200px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        expect(document.getElementById('sidebar').classList.contains('e-over')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toBe(true);
    });

    it("Sidebar with  'over' type , 'right' position and dock enabled test case", () => {
        let sidebar: any;
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over", enableDock: true, dockSize: 200, width: '300px', position: 'right' }, ele);
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(100%) translateX(-200px)");
        expect(document.getElementById('sidebar').style.width).toEqual("200px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 200px 0px 0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.show();
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect(document.getElementById('sidebar').style.width).toEqual("300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').style.transform).toEqual("translateX(100%) translateX(-200px)");
        expect(document.getElementById('sidebar').style.width).toEqual("200px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 200px 0px 0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        expect(document.getElementById('sidebar').classList.contains('e-over')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-right')).toBe(true);
    });
    function slidetypeLeftpositionShow(): void {
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(300px)");
    }
    function slidetypeLeftpositionHide(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }

    function pushtypeLeftpositionShow(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 0px 0px 300px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }

    function pushtypeLeftpositionHide(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }
    it("Sidebar push type with left position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", position: "left", width: "300px" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toEqual(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        pushtypeLeftpositionShow();
        sidebar.hide();
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        pushtypeLeftpositionHide();
        //onproperty change
        sidebar.type = "slide";
        sidebar.dataBind();
        expect(document.getElementById('sidebar').classList.contains('e-left')).toEqual(true);
        expect(document.getElementById('sidebar').classList.contains('e-slide')).toBe(true);
        sidebar.show();
        slidetypeLeftpositionShow();
        sidebar.hide();
        slidetypeLeftpositionHide();
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
    });
    it("Sidebar push type with right position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "push", position: "right", width: "300px" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-right')).toEqual(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px 300px 0px 0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        sidebar.hide();
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
        //onproperty change
        sidebar.type = "slide";
        sidebar.dataBind();
        sidebar.show();
        slidetypeRightpositionShow();
        sidebar.hide();
        slidetypeRightpositionHide();
    });

    it("Sidebar slide type with left position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", position: "left", width: "300px" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toEqual(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        slidetypeLeftpositionShow();
        sidebar.hide();
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        slidetypeLeftpositionHide();
    });

    function slidetypeRightpositionShow(): void {
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(-300px)");
    }

    function slidetypeRightpositionHide(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }
    it("Sidebar slide type with right position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "slide", position: "right", width: "300px" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        expect(document.getElementById('sidebar').classList.contains('e-right')).toEqual(true);
        sidebar.show();
        slidetypeRightpositionShow();
        sidebar.hide();
        slidetypeRightpositionHide();
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
    });
    function overtypeRightpositionShow(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }
    function overtypeRightpositionHide(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }

    function overtypeLeftpositionShow(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }
    function overtypeLeftpositionHide(): void {
        expect(document.getElementById('sidebar').style.width).toEqual('300px');
        expect(document.getElementById('sidebar').style.transform).toEqual("");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.margin).toBe("0px");
        expect((<HTMLElement>document.querySelector('.e-content-section')).style.transform).toBe("translateX(0px)");
    }
    it("Sidebar over type with left position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over", position: "left", width: "300px" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-left')).toEqual(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        overtypeLeftpositionShow();
        sidebar.hide();
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        overtypeLeftpositionHide();
        //onproperty change
        sidebar.type = "slide";
        sidebar.dataBind();
        sidebar.show();
        slidetypeLeftpositionShow();
        sidebar.hide();
        slidetypeLeftpositionHide();
    });

    it("Sidebar over type with right position test case", () => {
        let ele: HTMLElement = document.getElementById("sidebar");
        let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
        sidebar = new Sidebar({ type: "over", position: "right", width: "300px" }, ele);
        expect(document.getElementById('sidebar').classList.contains('e-right')).toEqual(true);
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        sidebar.show();
        expect(document.getElementById('sidebar').classList.contains('e-open')).toBe(true);
        overtypeRightpositionShow();
        sidebar.hide();
        overtypeRightpositionHide();
        expect(document.getElementById('sidebar').classList.contains('e-close')).toBe(true);
        //onproperty changes
        sidebar.position = "left";
        sidebar.dataBind();
        sidebar.show();
        overtypeLeftpositionShow();
        sidebar.hide();
        overtypeLeftpositionHide();
        //onproperty changes
        sidebar.position = "right";
        sidebar.dataBind();
        sidebar.show();
        overtypeRightpositionShow();
        sidebar.hide();
        overtypeRightpositionHide();
    });

    describe("Sidebar auto type in mobile test case ", () => {
        let sidebar: any;
        beforeEach((): void => {
            let ele: HTMLElement = document.createElement("div");
            let sibin: HTMLElement = document.createElement("div");
            ele.innerHTML = "<h3>Testing of Sidebar</h3>"
            sibin.innerHTML = "Side bar";
            sibin.className = 'e-content-section';
            ele.id = "sidebar";
            ele.style.width = "300px";
            ele.style.height = "100%";
            document.body.style.margin = "0px";
            document.body.appendChild(ele);
            document.body.appendChild(sibin);
            let androidPhoneUa: string = 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JWR66Y) ' +
                'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.92 Safari/537.36';
            Browser.userAgent = androidPhoneUa;

        });
        afterEach((): void => {
            if (sidebar) {
                sidebar.destroy();
            }
            document.body.innerHTML = "";
            let androidPhoneUa: string = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36';
            Browser.userAgent = androidPhoneUa;

        });
        it("", () => {
            let ele: HTMLElement = document.getElementById("sidebar");
            let sibling: HTMLElement = <HTMLElement>ele.nextElementSibling;
            sidebar = new Sidebar({ type: "auto", position: "left", width: "300px" }, ele);
            expect(document.getElementById('sidebar').classList.contains('e-over')).toBe(true);
            sidebar.resize();
        });
    });
});
