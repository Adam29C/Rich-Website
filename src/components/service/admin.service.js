import axios from "axios";
// import Files
import * as Config from "../Config/config";

// GET CONTACT
export async function GET_CONTACT(data, token) {
  try {
    const res = await axios.get(
      `${Config.base_url}api/web/walletContact`,
      data,
      {
        "content-type": "application/x-www-form-urlencoded",
        data: {},
      }
    );

    return await res?.data;
  } catch (err) {
    return err;
  }
}

// GET ALL GAMESLIST
export async function GET_ALL_GAMESLIST(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/allgames`, data, {
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}

// GET ALL GAMES
export async function GET_ALL_GAMES(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/games`, data, {
      data: {},
    });

    return await res?.data;
  } catch (err) {
    return err;
  }
}
// GET ALL GAMES
export async function GET_ALL_GAMERATES(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/gamerates`, data, {
      data: {},
    });

    return await res?.data;
  } catch (err) {
    return err;
  }
}
// GET ALL  STARTLINE GAMES
export async function GET_ALL_STARTLINE_GAMES(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/startline`, data, {
      data: {},
    });

    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL GAMES RESULT
export async function GET_ALL_GAMES_RESULT(data, token) {
  try {
    const res = await axios.post(`${Config.base_url}api/web/panachart`, data, {
    // const res = await axios.post(
    //   `http://localhost:6999/api/web/panachart`,
    //   data,
      // {
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL GAMES JODI CHART
export async function GET_ALL_JODI_CHART(data, token) {
  try {
    const res = await axios.post(`${Config.base_url}api/web/jodichart`, data, {
    // const res = await axios.post(
    //   `http://localhost:6999/api/web/jodichart`,
    //   data,
      // {
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL STARLINE GAMES PANA CHART
export async function GET_ALL_STARLINE_GAME_PANA_CHART(data, token) {
  try {
    const res = await axios.post(
      `${Config.base_url}api/web/startline_pana_chart`,
      data,
      {
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL JACKPOT
export async function GET_ALL_JACKPOT_GAME(data, token) {
  try {
    // const res = await axios.get(`${Config.base_url}api/web/allAbList`, data, {
    const res = await axios.get(`${Config.base_url}api/web/AbList`, data, {
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}
//GET ALL JACKPOT
export async function GET_JACKPOT_JODI_CHART(data, token) {
  try {
    const res = await axios.post(
      `${Config.base_url}api/web/jackpot_jodi_chart`,
      data,
      {
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}
//GET APK LINK
export async function GET_APK_LINK(data, token) {
  // console.log("`${Config.base_url}api/web/app_url`" ,`${Config.base_url}api/web/app_url`)
  try {
    const res = await axios.get(`${Config.base_url}api/web/app_url`, data, {
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}

// GET ALL  JACKPOT_GAME CHART
export async function GET_ALL_JACKPOT_GAME_CHART(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/allAbList`, data, {
      // const res = await axios.get(`${Config.base_url}api/web/AbList`, data, {
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}

// GET ALL  JACKPOT_GAME CHART
export async function GET_ALL_STARTLINE_GAMES_CHART(data, token) {
  try {
    const res = await axios.get(
      `${Config.base_url}api/web/allStartLine`,
      data,
      {
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}
// GET ALL  JACKPOT_GAME CHART
export async function GET_ALL_JACKPOT_JODI_CHART(data, token) {
  try {
    const res = await axios.get(
      `${Config.base_url}api/web/jackpot_jodi_chart/all`,
      data,
      {
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}

// ALL  JACKPOT_GAME CHART

export async function GET_ALL_STARLINE_PANA_CHART(data, token) {
  try {
    const res = await axios.get(
      `${Config.base_url}api/web/startline_pana_chart/all`,
      data,
      {
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}
