export default function template(){
    return `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" id="navbar-menu"></nav>
    <main class="d-flex flex-wrap">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" id="sidebar-menu"></div>
        <div class="flex-grow-1 p-3 bg-body-primary" id="content">
            <div class="flex-grow-1 p-12 bg-body-primary" id="user-info"></div>
            <div class="d-flex justify-content-between flex-wrap" id="page-info"></div>
        </div>
    </main>
    <footer class="d-flex flex-wrap justify-content-end align-items-center py-3 my-3 border-top mt-auto" id="footer"></footer>
    `
}