/* ==========================================
TABS AND BOOKMARKS CONFIG
========================================== */

const data = [
    {
        id: "content1",
        label: "1",
        content: `
        <pre class="ascii" id="ascii-placeholder-1"></pre>
        <br />
        <p id="ascii-description"><p>
        <h1 id="time-line">Good afternoon,<br /> it is <span id="clock" style="color: #b814b8;"></span></h1>
        <h1></h1>
        <div class="columns">
        <div class="column">
            <ul class="bookmark-list">
            <li>
                <span class="folder">Category 1</span>
                <ul class="sub-list">
                <li><a href="">link #1</a></li>
                <li><a href="">link #2</a></li>
                <li><a href="">link #3</a></li>
                <li><a href="">link #4</a></li>
                </ul>
            </li>
            <br>
            <li>
                <span class="folder">Category 2</span>
                <ul class="sub-list">
                <li><a href="">link #5</a></li>
                <li><a href="">link #6</a></li>
                <li><a href="">link #7</a></li>
                <li><a href="">link #8</a></li>
                </ul>
            </li>
            </ul>
        </div>
        <div class="column">
            <ul class="bookmark-list">
            <li>
                <span class="folder">Category 3</span>
                <ul class="sub-list">
                <li><a href="">link #9</a></li>
                <li><a href="">link #10</a></li>
                <li><a href="">link #11</a></li>
                <li><a href="">link #12</a></li>
                </ul>
            </li>
            <br>
            <li>
                <span class="folder">Category 4</span>
                <ul class="sub-list">
                <li><a href="">link #13</a></li>
                <li><a href="">link #14</a></li>
                <li><a href="">link #15</a></li>
                <li><a href="">link #16</a></li>
                </ul>
            </li>
            </ul>
        </div>
        <div class="column">
            <ul class="bookmark-list">
            <li>
                <span class="folder">Category 5</span>
                <ul class="sub-list">
                <li><a href="">link #17</a></li>
                <li><a href="">link #18</a></li>
                <li><a href="">link #19</a></li>
                <li><a href="">link #20</a></li>
                </ul>
            </li>
            <br>
            <li>
                <span class="folder">Category 6</span>
                <ul class="sub-list">
                <li><a href="">link #21</a></li>
                <li><a href="">link #22</a></li>
                <li><a href="">link #23</a></li>
                <li><a href="">link #24</a></li>
                </ul>
            </li>
            </ul>
        </div>
        </div>
        `
    }
]

function create_tabs() {
    var tabs = document.getElementById("tab-group");
    var container = document.querySelector(".container");

    for (var i = 0; i < data.length; i++) {
        var tab = document.createElement("button");
        var content = document.createElement("div");

        tab.className = "tab";
        tab.textContent = data[i].label;
        tab.addEventListener("click", show_content);
        tab.dataset.contentId = data[i].id;

        content.className = "content";
        content.id = data[i].id;
        tabs.appendChild(tab);
        container.appendChild(content)
    }
}

function show_content(event) {
    var content_id = event.currentTarget.dataset.contentId;
    var contents = document.getElementsByClassName("content");

    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    var content_element = document.getElementById(content_id);

    if (content_element.innerHTML.trim() === "") {
        var tab = data.find(function(tab) {
            return tab.id === content_id;
        });
        content_element.innerHTML = tab.content;
    }

    content_element.style.display = "block";
    var tabs = document.getElementsByClassName("tab");

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

create_tabs();
var default_tab = document.querySelector('.tab[data-content-id="content1"]');
show_content({ currentTarget: default_tab });
