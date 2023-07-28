alert("Masih ada beberapa bug yang belum diperbaiki");

$(document).ready(function () {
  let slidePort = 1;
  // NAVBAR SECTION
  $("#navbar").load("sections/navbar.html", function () {
    const mobileMenu = $(".menu-mobile");
    const content = $(".content");

    const line1 = $(".line-1");
    const line2 = $(".line-2");
    const line3 = $(".line-3");

    mobileMenu.on("click", function () {
      content.toggleClass("content-active");
      mobileMenu.toggleClass("menu-mobile-active");
      line1.toggleClass("line-1-active");
      line2.toggleClass("line-2-active");
      line3.toggleClass("line-3-active");

      $(document).on("click", function (e) {
        if (!$(e.target).hasClass("content-active") && !$(e.target).hasClass("menu-mobile-active") && !$(e.target).hasClass("line-1-active") && !$(e.target).hasClass("line-2-active") && !$(e.target).hasClass("line-3-active")) {
          content.removeClass("content-active");
          mobileMenu.removeClass("menu-mobile-active");
          line1.removeClass("line-1-active");
          line2.removeClass("line-2-active");
          line3.removeClass("line-3-active");
        }
      });
    });
  });

  // PROFILE SECTION
  $("#profile").load("sections/profile.html", function () {
    const mainImage = $("#main-image");
    const tTIdentitas = $("#close-profile-container");

    tTIdentitas.on("click", function () {
      $("#profile-container").fadeOut(500);
    });

    mainImage.on("click", function () {
      $("#profile-container").fadeIn(500);
    });

    const tProfesi = $("#tombol-profesi");
    $("#select").on("change", function () {
      const currentValue = $(this).val();
      slidePort = 1;

      if (currentValue === "0") {
        tProfesi.text("Profesi belum dipilih!");
      } else if (currentValue === "FE") {
        tProfesi.text("Bidang Front End Developer");
      } else if (currentValue === "KP") {
        tProfesi.text("Bidang Kepenulisan");
      } else if (currentValue === "VE") {
        tProfesi.text("Bidang Video Editor");
      }
    });

    tProfesi.on("click", function () {
      const text = $(this).text();
      const pBidang = $("#port-bidang");
      const select = $("#select").val();

      const sPortofolio = $("#portfolio");
      const indexProf = $("#portfolio div").filter(function () {
        return $(this).attr("data-prof");
      });

      if (text === "Profesi belum dipilih!") {
        alert("Silahkan pilih bidang yang ingin diketahui");
        return;
      } else {
        sPortofolio.css("display", "block");
        $("html, body").animate(
          {
            scrollTop: $("#portfolio").offset().top,
          },
          100
        );
        if (select == "FE") {
          pBidang.text("Front End Developer");
          indexProf.each(function () {
            if (!$(this).is("#portfolio-FE")) {
              $(this).fadeOut();
            } else {
              $(this).fadeIn();
            }
          });
        } else if (select == "KP") {
          pBidang.text("Kepenulisan");
          indexProf.each(function () {
            if (!$(this).is("#portfolio-KP")) {
              $(this).fadeOut();
            } else {
              $(this).fadeIn();
            }
          });
        } else if (select == "VE") {
          pBidang.text("Video Editor");
          indexProf.each(function () {
            if (!$(this).is("#portfolio-VE")) {
              $(this).fadeOut();
            } else {
              $(this).fadeIn();
            }
          });
        }
      }

      $("#contact").load("sections/contact.html", function () {
        $(this).slideDown();
      });
    });
  });

  // PORTFOLIO SECTION
  $("#portfolio").load("sections/portfolio.html", function () {
    const nextNav = $(".next-nav");
    const prevNav = $(".prev-nav");

    nextNav.on("click", function () {
      const siblingsIndex = $(this)
        .siblings()
        .filter(function () {
          return $(this).attr("data-port");
        });

      if (slidePort == siblingsIndex.length) {
        slidePort = 1;
      } else {
        slidePort++;
      }

      const currentPort = siblingsIndex[slidePort - 1];
      const activePort = $(currentPort).attr("data-port");

      if (slidePort == activePort) {
        $(siblingsIndex).each(function () {
          if ($(this).attr("data-port") !== activePort) {
            $(this).slideUp(400, function () {
              $(currentPort).slideDown(500);
            });
          }
        });
      }
    });

    prevNav.on("click", function () {
      const siblingsIndex = $(this)
        .siblings()
        .filter(function () {
          return $(this).attr("data-port");
        });

      if (slidePort == 1) {
        slidePort = siblingsIndex.length;
      } else {
        slidePort--;
      }
      const currentPort = siblingsIndex[slidePort - 1];
      const activePort = $(currentPort).attr("data-port");

      if (slidePort == activePort) {
        $(siblingsIndex).each(function () {
          if ($(this).attr("data-port") !== activePort) {
            $(this).slideUp(400, function () {
              $(currentPort).slideDown(500);
            });
          }
        });
      }
    });

    const sNextNav = $("#skill-next");
    const sPrevNav = $("#skill-prev");
    let imgSkilSlide = 1;

    sNextNav.on("click", function () {
      const siblingsIndex = $(this)
        .siblings()
        .filter(function () {
          return $(this).attr("data-slide-img");
        });

      if (imgSkilSlide == siblingsIndex.length) {
        imgSkilSlide = 1;
      } else {
        imgSkilSlide++;
      }

      const currentPort = siblingsIndex[imgSkilSlide - 1];
      const activePort = $(currentPort).attr("data-slide-img");

      if (imgSkilSlide == activePort) {
        $(siblingsIndex).each(function () {
          if ($(this).attr("data-slide-img") !== activePort) {
            $(this).fadeOut(400, function () {
              $(currentPort).fadeIn(500);
            });
          }
        });
      }
    });

    sPrevNav.on("click", function () {
      const siblingsIndex = $(this)
        .siblings()
        .filter(function () {
          return $(this).attr("data-slide-img");
        });

      if (imgSkilSlide == 1) {
        imgSkilSlide = siblingsIndex.length;
      } else {
        imgSkilSlide--;
      }

      const currentPort = siblingsIndex[imgSkilSlide - 1];
      const activePort = $(currentPort).attr("data-slide-img");

      console.log(currentPort);
      console.log(activePort);

      if (imgSkilSlide == activePort) {
        $(siblingsIndex).each(function () {
          if ($(this).attr("data-slide-img") !== activePort) {
            $(this).fadeOut(400, function () {
              $(currentPort).fadeIn(500);
            });
          }
        });
      }
    });

    // FE-INTRO
    $("div[data-category=fe-intro]").load("sections/FE-port/intro.html");

    // FE-KEMAHIRAN
    $("div[data-category=fe-kemahiran]").load("sections/FE-port/kemahiran.html");

    // FE-PENCAPAIAN
    $("div[data-category=fe-pencapaian]").load("sections/FE-port/pencapaian.html", function () {
      $(".sertifikat-container").load("sections/FE-port/sertifikat.html", function () {
        const imgSkillFEP = $(".sertifikat");
        const skilTrigFEP = $(".container-reward");

        imgSkillFEP.on("click", function () {
          console.log(this);
          console.log(skilTrigFEP);
          for (let i = 0; i < skilTrigFEP.length; i++) {
            if ($(this).attr("data-reward") == $(skilTrigFEP[i]).attr("id")) {
              $(skilTrigFEP[i]).slideDown();
            }
          }
        });
      });
    });

    // FE-KREASI
    $("div[data-category=fe-kreasi]").load("sections/FE-port/kreasi.html", function () {
      $(".container-karya").load("sections/FE-port/karya.html", function () {
        const skilTrigFEK = $(".container-reward");

        const creativityContainer = $(".creativity-container");
        const cChildren = creativityContainer.children();
        let cSlide = 1;
        let cFPoint = 0;
        let cLimit = 3;
        let section = cChildren.slice(cFPoint, cLimit);

        $(".creativity-container .img-skill").on("click", function () {
          for (let i = 0; i < skilTrigFEK.length; i++) {
            if ($(this).attr("data-creative") == $(skilTrigFEK[i]).attr("id")) {
              $(skilTrigFEK[i]).slideDown();
            }
          }
        });

        $("#creativity-next").on("click", function () {
          cSlide++;
          cFPoint += 3;
          cLimit += 3;

          if (cSlide > Math.ceil(cChildren.length / 3)) {
            cSlide = 1;
            cFPoint = 0;
            cLimit = 3;
          }

          const prevSection = section;
          section = cChildren.slice(cFPoint, cLimit);

          prevSection.hide();
          section.show();
        });

        $("#creativity-prev").on("click", function () {
          cSlide--;
          cFPoint -= 3;
          cLimit -= 3;

          if (cSlide < 1) {
            cSlide = Math.ceil(cChildren.length / 3);
            cFPoint = (cSlide - 1) * 3;
            cLimit = cSlide * 3;
          }

          const prevSection = section;
          section = cChildren.slice(cFPoint, cLimit);

          prevSection.hide();
          section.show();
        });

        $(".close-reward").click(function () {
          $(this).parent().slideUp();
        });
      });
    });

    // KP-INTRO
    $("div[data-category=kp-intro]").load("sections/KP-port/intro.html");

    // KP-KEMAHIRAN
    $("div[data-category=kp-kemahiran]").load("sections/KP-port/kemahiran.html");

    // KP-PENCAPAIAN
    $("div[data-category=kp-pencapaian").load("sections/KP-port/pencapaian.html", function () {
      $("#kp-sertifikat-container").load("sections/KP-port/sertifikatkp.html", function () {
        const imgSkillKPP = $(".kp-certif");
        const skilTrigKPP = $(".container-reward");

        imgSkillKPP.on("click", function () {
          for (let i = 0; i < skilTrigKPP.length; i++) {
            if ($(this).attr("data-reward") == $(skilTrigKPP[i]).attr("id")) {
              $(skilTrigKPP[i]).slideDown();
            }
          }
        });

        $(".kp-certif-close").click(function () {
          $(this).parent().slideUp();
        });
      });
    });

    // KP KREASI
    $("div[data-category=kp-kreasi").load("sections/KP-port/kreasikp.html", function () {
      $(".container-karyakp").load("sections/KP-port/karyakp.html", function () {
        const skilTrigKPK = $(".container-reward");

        const creativityContainerkp = $(".cckp");
        const cChildrenkp = creativityContainerkp.children();
        let cSlidekp = 1;
        let cFPointkp = 0;
        let cLimitkp = 3;
        let sectionkp = cChildrenkp.slice(cFPointkp, cLimitkp);

        $(".cckp .img-skill").on("click", function () {
          console.log(sectionkp);
          for (let i = 0; i < skilTrigKPK.length; i++) {
            if ($(this).attr("data-creative") == $(skilTrigKPK[i]).attr("id")) {
              $(skilTrigKPK[i]).slideDown();
            }
          }
        });

        $("#creativity-next-kp").on("click", function () {
          cSlidekp++;
          cFPointkp += 3;
          cLimitkp += 3;

          if (cSlidekp > Math.ceil(cChildrenkp.length / 3)) {
            cSlidekp = 1;
            cFPointkp = 0;
            cLimitkp = 3;
          }

          const prevSectionkp = sectionkp;
          sectionkp = cChildrenkp.slice(cFPointkp, cLimitkp);

          console.log(prevSectionkp);
          console.log(sectionkp);

          prevSectionkp.hide();
          sectionkp.show();
        });

        $("#creativity-prev-kp").on("click", function () {
          cSlidekp--;
          cFPointkp -= 3;
          cLimitkp -= 3;

          if (cSlidekp < 1) {
            cSlidekp = Math.ceil(cChildrenkp.length / 3);
            cFPointkp = (cSlidekp - 1) * 3;
            cLimitkp = cSlidekp * 3;
          }

          const prevSection = sectionkp;
          sectionkp = cChildrenkp.slice(cFPointkp, cLimitkp);

          prevSection.hide();
          sectionkp.show();
        });

        $(".crewardkp").click(function () {
          $(this).parent().slideUp();
        });
      });
    });

    // VE INTRO
    $("div[data-category=ve-intro]").load("sections/VE-port/intro.html");

    // VE-KEMAHIRAN
    $("div[data-category=ve-kemahiran]").load("sections/VE-port/kemahiran.html");

    // VE-PENCAPAIAN
    $("div[data-category=ve-pencapaian").load("sections/VE-port/pencapaian.html");

    // VE KREASI
    $("div[data-category=ve-kreasi").load("sections/VE-port/kreasi.html", function () {
      $(".container-karyave").load("sections/VE-port/karya.html", function () {
        const skilTrigVEK = $(".container-reward");

        const creativityContainerve = $(".ccve");
        const cChildrenve = creativityContainerve.children();
        let cSlideve = 1;
        let cFPointve = 0;
        let cLimitve = 3;
        let sectionve = cChildrenve.slice(cFPointve, cLimitve);

        $(".ccve .img-skill").on("click", function () {
          console.log(sectionve);
          for (let i = 0; i < skilTrigVEK.length; i++) {
            if ($(this).attr("data-creative") == $(skilTrigVEK[i]).attr("id")) {
              $(skilTrigVEK[i]).slideDown();
            }
          }
        });

        $("#creativity-next-ve").on("click", function () {
          cSlideve++;
          cFPointve += 3;
          cLimitve += 3;

          if (cSlideve > Math.ceil(cChildrenve.length / 3)) {
            cSlideve = 1;
            cFPointve = 0;
            cLimitve = 3;
          }

          const prevSectionve = sectionve;
          sectionve = cChildrenve.slice(cFPointve, cLimitve);

          console.log(prevSectionve);
          console.log(sectionve);

          prevSectionve.hide();
          sectionve.show();
        });

        $("#creativity-prev-ve").on("click", function () {
          cSlideve--;
          cFPointve -= 3;
          cLimitve -= 3;

          if (cSlideve < 1) {
            cSlideve = Math.ceil(cChildrenve.length / 3);
            cFPointve = (cSlideve - 1) * 3;
            cLimitve = cSlideve * 3;
          }

          const prevSection = sectionve;
          sectionve = cChildrenve.slice(cFPointve, cLimitve);

          prevSection.hide();
          sectionve.show();
        });

        $(".crewardve").click(function () {
          $(this).parent().slideUp();
        });
      });
    });
  });

  // CONTACT SECTION
});
