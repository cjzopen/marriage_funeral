# marriage_funeral
喜喪酬酢品申請

based on bootstrap 4.0

## 主要css

* 喜事：main-pink.css
* 喪事：main-gray.css

視情況套用

## javascript

* js/other.js

## 訊息視窗

    <!-- 彈出視窗 -->
    <div id="popout">
        <div id="popout-content">
          <header class="l-size bb-1">標題</header>
          <p class="content">訊息內容</p>
          <footer class="text-center">
            <a href="#" class="btn mr-2">確定</a>
            <a href="#" class="btn active">取消</a>
          </footer>
        </div>
    </div>
    <!-- 彈出視窗結尾 -->


## 手風琴


    <div class="accordion fff-bg mb-3">
      <h3 class="accordion-title">標題</h3>
      <div class="accordion-body">
        ...
      </div>
    </div>


## 註解

    <span class="remark btn active" data-content="{{註解的內容}}">註</span>
