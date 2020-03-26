import axios from 'axios';

async function loginReq({ user, pass, $store }) {
  try {
    const res = await axios.post(
      'https://msmith-be-nc-news.herokuapp.com/api/login',
      {
        username: user,
        password: pass
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    localStorage.setItem('token', res.data.token);
    $store.commit('tokenChange', res.data.token);
    $store.commit('userChange', res.data.user);
    $store.commit('statusChange', true);
    return false;
  } catch (err) {
    return true;
  }
}

function logoutReq({ $store }) {
  localStorage.setItem('token', '');
  $store.commit('tokenChange', '');
  $store.commit('userChange', {});
  $store.commit('statusChange', false);
}

async function getTopics({ $store }) {
  try {
    const res = await axios.get(
      'https://msmith-be-nc-news.herokuapp.com/api/topics',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${$store.getters.token}`
        }
      }
    );
    return res.data.topics;
  } catch (err) {
    return null;
  }
}

async function getArticles(number, { $store }) {
  try {
    const page_no = number || 1;
    const res = await axios.get(
      `https://msmith-be-nc-news.herokuapp.com/api/articles?limit=10&p=${page_no}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${$store.getters.token}`
        }
      }
    );
    return { articles: res.data.articles, total_count: res.data.total_count };
  } catch (err) {
    return null;
  }
}

export { loginReq, logoutReq, getTopics, getArticles };
