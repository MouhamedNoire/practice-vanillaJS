const API= {
    url: "/data/menu.json",
    fetchMenu: async ()=>{
        const result = await fetch(API.url);
        //fetch always returns a promise so we have to await it
        return await result.json();
    }
}

export default API;