﻿$(document).ready(function () {
    $("body").addClass("reading-manga");
    $("#addCmt").on("click", (function (e) { e.preventDefault(); var t = $(this), i = t.data("truyen-id"), r = t.data("chapter-id"), o = $("#cmtlid").html(), a = $(this).data("url"), s = {truyenID: i, chapterID: r, userID: 1, content: o}; $.ajax({ url: a, type: "POST", contentType: "application/json; charset=utf-8", data: JSON.stringify(s), dataType: "json", success: function (e) { var t = e.data; $("#cmtlid").html(""); var n = '<li class="comment_item">\n                                <a class="wrap-avatar">\n                                    <img src="/assets/images/avatar/default.png" alt="">\n                                </a>\n                                <div class="comment-head">\n                                        <h3>'.concat(t.username, '</h3>\n                                    <time class="time">').concat(t.ago, '</time>\n                                </div>\n                                <div class="comment-content">').concat(t.content, '\n                                    <div class="comment-button">\n                                        <button class="btn-button" onclick="postReply(').concat(t.story_id, ')">\n                                        <i class="fa fa-reply" aria-hidden="true"></i> Reply\n                                        </button>\n                                    </div>\n                                </div>\n                            </li>'); $("#comments_load > ul.list_comment").prepend(n) } }) }))
})