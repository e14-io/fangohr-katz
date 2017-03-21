$(document).ready(init);

var dic = 
    {
        "peace-of-mind-team": [
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '01',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Vanessa Sanchez",
                "subtitle": "Design",
                "img": '02',
                "content": "Vanessa received a Bachelor of Arts in Architecture from the University of California, \
                Berkeley in 2004 and is certified in Social Economic Environmental Design (SEED) from the Public Interest Design Institute. \
                Her New York experience includes residential, hospitality and educational projects with Halpern Architects and Robert A.M. \
                Stern. As a project designer at KA, Vanessa has been instrumental in the completion of multiple residential and commercial \
                gut renovation projects. In addition to her architectural work, Vanessa has volunteered her time for multiple causes \
                including Big Brothers Big Sisters of New York, New York Cares and Open Architecture New York."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '03',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '04',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '05',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '06',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '07',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '08',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '09',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "David Katz",
                "subtitle": "Director",
                "img": '10',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                            magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            }
            
        ],
        "management-properties": [
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
        ]
    };

function windowWidth() {
    return $(window).width();
}

function scroll() {
    $(".main-anchor").click(function () {
        var section = $(this).parents('section');
        if (windowWidth() > 767) {
            var nextSection = section.next();
            $(nextSection).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: section.next().offset().top
            }, 1000);
        }
    });
    $(".cover-anchor, .bkg-cover").click(function () {
        var section = $(this).closest('section');
        if (windowWidth() > 767) {
            var parentSection = section.parent('section');
            if (section.attr('id') == 'building2' || section.attr('id') == 'management2') {
                parentSection.addClass('translate-section-building');
            } else if (section.attr('id') == 'peace-of-mind2') {
                parentSection.addClass('translate-section-peace-of-mind');
            } else if (section.attr('id') == 'peace-of-mind3') {
                parentSection.addClass('translate-section-peace-of-mind2');
            } else if (section.attr('id') == 'peace-of-mind4') {
                $('#contact').addClass('activate-section');
            } else {
                parentSection.addClass('translate-section');
            }
        } else {
            var target = (section.attr('id') == 'peace-of-mind4') ? $('#contact') : section.next();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    $(".about").click(function() {
        if (windowWidth() > 767) {
            $("#peace-of-mind").addClass('translate-section-peace-of-mind');
        } else {
            var target = $(this).data('target');
            $('html, body').animate({
                scrollTop: $('#peace-of-mind3').offset().top
            }, 1000);
        }
    });
    $(".team").click(function() {
        if (windowWidth() > 767) {
            $("#peace-of-mind").addClass('translate-section-peace-of-mind2');
        } else {
            var target = $(this).data('target');
            $('html, body').animate({
                scrollTop: $('#peace-of-mind4').offset().top
            }, 1000);
        }
    });
}

function extractImageRoot(img) {
    var imgNameFile = img.match(/([0-9]+)\.([0-9a-z]+)/) || "";
    if (imgNameFile !== null)
        img = img.replace(imgNameFile[0], "");
    img = img.replace('management-properties/','');
    img = img.replace('peace-of-mind-team/','');
    img = img.replace('caruosel/','');
    return img;
}

function showDetail(target, idSection, detailItem) {
    $('#'+target).addClass('detail-active');
    $('#'+target+' .font-title-detail').html(dic[idSection][detailItem]['title']);
    $('#'+target+' .font-subtitle-detail').html(dic[idSection][detailItem]['subtitle']);
    var imgSrc = $('#'+target+' .team-member-image').attr('src');
    imgSrc = extractImageRoot(imgSrc);
    imgSrc = imgSrc + '/' + idSection+'/'+dic[idSection][detailItem]['img'] + '.png';
    $('#'+target+' .team-member-image').attr('src', imgSrc);
    $('#'+target+' .team-member-image').attr('alt', dic[idSection][detailItem]['title']);
    $('#'+target+' .font-content').html(dic[idSection][detailItem]['content']);
    $('#index-item').data('detail-item', detailItem.toString());
    $('#index-item').data('id-section', idSection);
}

function viewDetails() {
    $('.item-detail').hover(function() {
        $(this).toggleClass('deactivate');
        var tooltip = $(this).next();
        tooltip.toggleClass('detail-tooltip-active');
    });
    $('.item-detail').click(function() {
        var target = $(this).data('target');
        var idSection = $(this).closest('section').attr('id');
        var detailItem = $(this).data('detail-item');
        var sectionTarget = $('#'+target);
        showDetail(target, idSection, detailItem);
    });
}
function closeDetails() {
    $('.close-wrapper-detail').click(function() {
        $(this).parent('section').removeClass('detail-active');
    });
}

function carouselHandler() {
    $('.js-open-carousel').click(function() {
        console.log('openBuilding');
        // var section = $(this).closest('section');
        $('#building').addClass('translate-section-peace-of-mind2');
    });
    $('.close-wrapper-slider').click(function() {
        console.log('entramos');
        $('#building').removeClass('translate-section-peace-of-mind2');
        $('#building').addClass('translate-section-peace-of-mind');
    });
}

function navigationDetails() {
    $('.right-arrow').click(function() {
        var idSection = $('#index-item').data('id-section');
        var detailItem = $('#index-item').data('detail-item');
        detailItem = parseInt(detailItem);
        detailItem = (detailItem + 1 > dic[idSection].length - 1) ? 0 : detailItem + 1;
        showDetail('detail', idSection, detailItem);
    });
    $('.left-arrow').click(function() {
        var idSection = $('#index-item').data('id-section');
        var detailItem = $('#index-item').data('detail-item');
        detailItem = parseInt(detailItem);
        detailItem = (detailItem - 1 < 0) ? dic[idSection].length - 1 : detailItem - 1;   
        showDetail('detail', idSection, detailItem);
    });
}

function openSection() {
    $('.open-section').click(function() {
        var target = $(this).data('target');
        $(this).find('input').prop('checked', true);
        if (windowWidth() > 767) {
            $('#'+target).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#'+target).offset().top
            }, 1000);
        }
    });
}

function closeSection() {
    $('.close-wrapper').click(function() {
        if (windowWidth() > 767) {
            var sections = $(this).parents('section');
            var parentSection = sections.parent('section');
            parentSection.removeClass('\
            activate-section \
            translate-section \
            translate-section-building \
            translate-section-peace-of-mind \
            translate-section-peace-of-mind2 \
            translate-section-peace-of-mind3 \
            ');
        } else {
            $('html, body').animate({
                scrollTop: $('#menu').offset().top
            }, 1000);
        }
    });
    $('.contact-close').click(function() {
        if (windowWidth() > 767) {
            var section = $(this).parents('section');
            section.removeClass('activate-section');
            var sections = $('section');
            //workaround: when contact comes from peace-of-mind
            sections.each(function(index) {
                var section = $(this);
                section.removeClass(' \
                activate-section \
                translate-section \
                translate-section-peace-of-mind \
                translate-section-peace-of-mind2 \
                translate-section-peace-of-mind3');
            });
            
        } else {
            $('html, body').animate({
                scrollTop: $('#menu').offset().top
            }, 1000);
        }
    });
}

function scrollTo() {
    $('.link-to').click(function () {
        var target = $(this).data('target');
        if (windowWidth() > 767) {
            $('#'+target).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#'+target).offset().top
            }, 1000);
        }
    });
}

function carousel() {
    $('.carousel').carousel({
        pause: true,
        interval: false
    });
}

function check() {
    $(".menu-ul .check-list [type=checkbox]").on('click', function () {
        $(this).prop('checked', true);
    });
}

function disableCheckbox() {
    $(".check-list [type=checkbox]").on('click', function (e) {
        if ($(this).closest('section').attr('id') !== "contact") {
            e.preventDefault();
        }
    });
}

function carouselTransition() {
    $('.carousel').on('slide.bs.carousel', function () {
        var carouselItem = $(this).find('.active');
        if (carouselItem.index() > 0) {
            var lastCarouselItem = carouselItem.prev();
            if (lastCarouselItem.hasClass('deactivate')) {
                lastCarouselItem.removeClass('deactivate');
            }
        }
        carouselItem.removeClass('deactivate');
    });
    $('.carousel').on('slid.bs.carousel', function () {
        var carouselItem = $(this).find('.active');
        carouselItem.addClass('deactivate');
    });
}

function checkCover() {
    var checkboxes = $(".cover-ul [type=checkbox]");
    checkboxes.each(function(index) {        
        var checkbox = $(this);
        var t = setTimeout(function() { 
            checkbox.prop('checked', true);
        }, 400 * index);        
    });
}

function down() {
    $('html, body').animate({
        scrollTop: $('#menu').offset().top
    }, 1000, function() {
        $("#cover").css('display', 'none');
        $("body").scrollTop(0);
        if (windowWidth() > 767) {
            $(".menu").css('position', 'fixed');
        }
    });
}
function scrollFromCoverToMenu() {
    if (windowWidth() > 767) {
        $(window).one('scroll', down);
    }
    $("#cover").one('scroll click keydown', down);
}

function toggleInfoDiv() {
    $('.info-button').click(function() {
        var parent = $(this).parent('.carousel-item');
        var infoDiv = parent.find('.info-div');
        infoDiv.addClass('info-active');
        $('.close-wrapper-info').show();
        $(this).hide();
    });
    $('.close-wrapper-info').click(function() {
        var parent = $(this).closest('.carousel-item');
        var infoDiv = parent.find('.info-div');
        infoDiv.removeClass('info-active');
        parent.find('.info-button').show();
    });
}

function detectResize() {
   if (windowWidth() > 767) {
        $(window).resize(function() {
            location.reload();
        });
     } 
}

function init() {
    scroll();
    carousel();
    disableCheckbox();
    checkCover();
    scrollTo();
    carouselTransition();
    check();
    scrollFromCoverToMenu();
    openSection();
    closeSection();
    toggleInfoDiv();
    detectResize();
    viewDetails();
    closeDetails();
    navigationDetails();
    carouselHandler();
}