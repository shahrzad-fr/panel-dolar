$(document).ready(function() {
  jQuery('.show-pass').on('click',function(){
    jQuery(this).toggleClass('active');
    if(jQuery('#pw_user').attr('type') == 'password'){
      jQuery('#pw_user').attr('type','text');
    }else if(jQuery('#pw_user').attr('type') == 'text'){
      jQuery('#pw_user').attr('type','password');
    }
  });
});
$(document).ready(function() {
    $('.menu_srv, .notif_ivan, .app_ivan, .profile_mini, .profile_mini_mob').hover(
      function() {
        setTimeout(function() {
          $('body').addClass('opacity_menu');
        });
      },
      function() {
        $('body').removeClass('opacity_menu');
      }
    );
  });
var swiper_last_price = new Swiper(".swiper_slogan_login", {
  slidesPerView: "auto",
  loop:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  },
});
$(document).ready(function() {
    function formatOption(option) {
        if (!option.id) {
            return option.text;
        }
        
        var imgSrc = $(option.element).data('img');
        var subtext = $(option.element).data('subtext');
        
        var imgTag = imgSrc ? '<img src="' + imgSrc + '" class="icon" />' : '';
        
        var subtextSpan = subtext ? '<span class="option-subtext">' + subtext + '</span>' : '';
        
        var $option = $(
            '<div class="option-content">' + imgTag + '<div><p>' + option.text + '</p>' + subtextSpan + '</div></div>'
        );
        return $option;
    };
  
    function formatSelection(option) {
        if (!option.id) {
            return option.text;
        }
        
        var imgSrc = $(option.element).data('img');
        var subtext = $(option.element).data('subtext');
        
        var imgTag = imgSrc ? '<img src="' + imgSrc + '" class="icon" />' : '';
        
        var subtextSpan = subtext ? '<span class="option-subtext">' + subtext + '</span>' : '';
  
        var $option = $(
            '<div class="option-content">' + imgTag + '<div><p>' + option.text + '</p>' + subtextSpan + '</div></div>'
        );
        return $option;
    };
  
    $('.select2').select2({
        templateResult: formatOption,
        templateSelection: formatSelection,
        escapeMarkup: function(m) {
            return m;
        }
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.code-input input');

  inputs.forEach((input, index) => {
      input.addEventListener('input', function() {
          if (this.value.length === 1) {
              if (index > 0) {
                  inputs[index - 1].focus();
              }
          }
      });

      input.addEventListener('keydown', function(e) {
          if (e.key === 'Backspace' && this.value.length === 0) {
              if (index < inputs.length - 1) {
                  inputs[index + 1].focus();
              }
          }
      });

      input.addEventListener('focus', function() {
          inputs.forEach(inp => inp.classList.remove('active'));
          this.classList.add('active');
      });

      input.addEventListener('blur', function() {
          this.classList.remove('active');
      });
  });
});
const radioButtons = document.querySelectorAll('.list_radio input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.bx_radio').forEach(div => div.classList.remove('active'));
        
        if (this.checked) {
            this.closest('.bx_radio').classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
  var closeButton = document.querySelector('.btn_close_side');
  
  closeButton.addEventListener('click', function() {
      document.body.classList.toggle('menu-toggle');
  });
});
document.querySelectorAll('.option_wallet').forEach(option => {
  option.addEventListener('click', function() {
      this.parentNode.querySelectorAll('.option_wallet').forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      this.querySelector('input[type="radio"]').checked = true;
  });
});
document.getElementById("btn_id_ref").addEventListener("click", function() {
    var idText = document.getElementById("id_ref").innerText;
    copyToClipboard(idText);
});

document.getElementById("btn_link_ref").addEventListener("click", function() {
    var linkText = document.getElementById("link_ref").innerText;
    copyToClipboard(linkText);
});

function copyToClipboard(text) {
    var tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
$(document).ready(function() {
  function updateContent() {
      if ($(window).width() <= 992) {
          $('#tabs_wallet_desk').empty().append(`
                        <div class="srh_tbl">
                          <input type="text" class="form-control" placeholder="جستجوی رمز ارز" />
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                        <ul class="nav nav-tabs nav_tabs_sm" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="star-tab" data-bs-toggle="tab" data-bs-target="#star-tab-pane" type="button" role="tab" aria-controls="star-tab-pane" aria-selected="true">منتخب</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="invt-tab" data-bs-toggle="tab" data-bs-target="#invt-tab-pane" type="button" role="tab" aria-controls="invt-tab-pane" aria-selected="false" tabindex="-1">دارایی ها</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="false" tabindex="-1">همه</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="new-tab" data-bs-toggle="tab" data-bs-target="#new-tab-pane" type="button" role="tab" aria-controls="new-tab-pane" aria-selected="false" tabindex="-1">تازه ها</button>
                                </li>
                            </ul>
                        <ul class="nav nav-tabs nav_tabs_sm ms-4" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ir-tab" data-bs-toggle="tab" data-bs-target="#ir-tab-pane" type="button" role="tab" aria-controls="ir-tab-pane" aria-selected="true">تومان</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="usdt-tab" data-bs-toggle="tab" data-bs-target="#usdt-tab-pane" type="button" role="tab" aria-controls="usdt-tab-pane" aria-selected="false" tabindex="-1">تتر</button>
                            </li>
                        </ul>
                        </div>
          `);
      } else {
          $('#tabs_wallet_desk').empty().append(`
            <div class="d-flex align-items-center">
                            <div class="srh_tbl">
                                <input type="text" class="form-control" placeholder="جستجوی رمز ارز" />
                            </div>
                            <ul class="nav nav-tabs nav_tabs_sm ms-4" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="star-tab" data-bs-toggle="tab" data-bs-target="#star-tab-pane" type="button" role="tab" aria-controls="star-tab-pane" aria-selected="true">منتخب</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="invt-tab" data-bs-toggle="tab" data-bs-target="#invt-tab-pane" type="button" role="tab" aria-controls="invt-tab-pane" aria-selected="false" tabindex="-1">دارایی ها</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="false" tabindex="-1">همه</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="new-tab" data-bs-toggle="tab" data-bs-target="#new-tab-pane" type="button" role="tab" aria-controls="new-tab-pane" aria-selected="false" tabindex="-1">تازه ها</button>
                                </li>
                            </ul>
                        </div>
                        <ul class="nav nav-tabs nav_tabs_sm ms-4" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ir-tab" data-bs-toggle="tab" data-bs-target="#ir-tab-pane" type="button" role="tab" aria-controls="ir-tab-pane" aria-selected="true">تومان</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="usdt-tab" data-bs-toggle="tab" data-bs-target="#usdt-tab-pane" type="button" role="tab" aria-controls="usdt-tab-pane" aria-selected="false" tabindex="-1">تتر</button>
                            </li>
                        </ul>
            `);
      }
    }
    updateContent();
    $(window).resize(updateContent);
});
const rangeInput = document.querySelector('.form_range');
const dots = document.querySelectorAll('.slider-track .dot');
const filledTrack = document.querySelector('.slider-filled');

rangeInput.addEventListener('input', function() {
    const value = this.value;
    const percentage = (value / this.max) * 100;

    dots.forEach(dot => {
        const dotValue = dot.getAttribute('data-value');
        if (dotValue === value) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }

        if (dotValue <= value) {
            dot.classList.add('actived');
        } else {
            dot.classList.remove('actived');
        }
    });

    filledTrack.style.width = `${percentage}%`;
});

rangeInput.dispatchEvent(new Event('input'));