
function getFrontMainPage() {
    App.removeNavAndPage();
    App.scrollUpToTopOfPage();
    if (sessionStorageAvailable("fragment")) {
      App.retainTemplateOnReload("");      
    }
    var front_page_main = new MainFrontView();
    document.title = 'City English Project | Home';
    App.renderNavBar();
    front_page_main.render();

    if (sessionStorage.getItem('genSched') !== 'closed') {
      App.getGeneralSchedModal();
    }

    var cls_dtls_view = new ClassDetailsView();
    $("#classdetailsmodal").html(cls_dtls_view.render().el);

    App.allowForNestedModals();

    App.front_page_main = front_page_main;
}