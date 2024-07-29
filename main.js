function getProjects() {
    const urlGitHub = 'https://api.github.com/users/karinecsilva/repos';
    var loadingElement = document.getElementById('loading');

    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none';
            showProjects(response);
        })
        .catch((e) => {
            console.log(e);
        });
}

function showProjects(data) {
    var listElement = document.getElementById('my-projects-list');

    for (let i = 0; i < data.length; i++) {
        let project = data[i];
        let a = document.createElement('a');
        a.href = project.html_url;
        a.textContent = project.name;
        listElement.appendChild(a);
    }
}

getProjects();
