// 리스트 아이템 Object 생성
const MyListItem = function(config, el){
    const self = this;

    // 데이터를 저장할 변수
    let datas = {}

    // 현재 요소의 인스턴스를 가져올 수 있도록 설정
    el.instance = self;
    el.getInstance = function(){
        return this.instance;
    }

    // Object에 현재 요소를 저장
    self.el = el;

    // 기본 함수를 설정
    self.setConfig = function(k, v){ config[k] = v; }
    self.getConfig = function(k){ return config[k]; }
    self.setData = function(k, v){ datas[k] = v; }
    self.getData = function(k){ return datas[k]; }
}

// Prototype을 이용한 모듈 패턴
MyListItem.prototype = (function(){
    // 초기화 함수
    function _init(self){
        _initRender(self);
        _initEvent(self);
    }

    // 렌더링 함수
    function _initRender(self){
        const id = self.getConfig("id");
        const html = '<a style="color: red;">'+id+'</a>';

        self.el.innerHTML = html;
        self.el.id = self.getConfig("id");
    }

    // 이벤트 바인딩 함수
    function _initEvent(self){
        const a = self.el.querySelector("a");
        a.addEventListener("click", function(event){
            event.preventDefault();

            alert(this.innerText);
        });
    }

    // 각 함수를 Prototype에 적용
    return {
        init: function(){
            _init(this);
        },
        setText: function(text){
            const tag = self.el.querySelector("a");
            tag.innerText = text;
        },
        setHTML: function(html){
            this.el.innerHTML = html;
        }
    }
})();

// Element 객체에 myListItem 함수를 추가
Element.prototype.myListItem = function(setting){
    console.log(setting);
    // 기본 설정
    const config = {
        id: null,
        parent: null,
        url: null,
        data: null
    }

    // 추가 설정
    if( setting ){
        Object.assign(config, setting);
    }

    // 현재 요소에 MyListItem 모듈을 적용
    const module = new MyListItem(config, this);

    // 초기화
    module.init();

    // 인스턴스를 반환
    return module;
}