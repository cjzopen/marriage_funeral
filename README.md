# marriage_funeral
喜喪酬酢品申請

based on bootstrap 4.0

## 主要css
* [font-awesome 4.7.0](https://fontawesome.com/v4.7.0/icons/)
* 喜事：main-pink.css
* 喪事：main-gray.css

視情況套用

### spacing class name

The classes are named using the format {property}{sides}-{size}

Where property is one of:

*  m - for classes that set margin
*  p - for classes that set padding

Where sides is one of:

*  t - for classes that set margin-top or padding-top
*  b - for classes that set margin-bottom or padding-bottom
*  l - for classes that set margin-left or padding-left
*  r - for classes that set margin-right or padding-right
*  x - for classes that set both *-left and *-right
*  y - for classes that set both *-top and *-bottom


blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

*  0 - for classes that eliminate the margin or padding by setting it to 0
*  1 - (by default) for classes that set the margin or padding to $spacer * .25
*  2 - (by default) for classes that set the margin or padding to $spacer * .5
*  3 - (by default) for classes that set the margin or padding to $spacer
*  4 - (by default) for classes that set the margin or padding to $spacer * 1.5
*  5 - (by default) for classes that set the margin or padding to $spacer * 3
*  auto - for classes that set the margin to auto

       .ml-3 {
          margin-left: 1rem !important;
        }


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


## 純文字註解

    <span class="remark btn active" data-content="{{註解的內容}}" {{data-title="標題"}}>註</span>
    // data-title為選填，預設為"註解"


## 含有html內容的視窗

    <a href="#" class="popout" data-urlpath="{{檔案路徑}}" {{data-title="標題"}}>xxxxx</a>
    // data-title為選填，預設為空白字符

## table
* 有排序功能的話，一定要給table id
* th 加上 .sort 可排序

      <div class="table-responsive-lg">
        <table class="table" id="tableID">
          <thead>
            <tr>
              <th class="sort"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

## checkbox
id跟for要相同

    <div class="check">
      <input type="checkbox" id="search1"><label for="search1">案件編號</label>
    </div>

## radio

方形

    <label class="radio-square">不限
      <input type="radio" name="申請類別1">
      <span class="circle"></span>
    </label>
    <label class="radio-square">類1
      <input type="radio" name="申請類別1">
      <span class="circle"></span>
    </label>

圓形

    <label class="radio">&nbsp;
      <input type="radio" name="no1">
      <span class="circle"></span>
    </label>
    <label class="radio">&nbsp;
      <input type="radio" name="no1">
      <span class="circle"></span>
    </label>
