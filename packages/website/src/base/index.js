const userName = 'KuangPF';

const fetchUrl = `https://api.github.com/users/${userName}`;

fetch(fetchUrl)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
