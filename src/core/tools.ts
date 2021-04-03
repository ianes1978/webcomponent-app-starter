export const decodeUrl = (location) => {
    // Extract the page name from path.
    const path = decodeURIComponent(location.hash).split('?')[0];
    const search = decodeURIComponent(location.hash).split('?')[1];

    const parts = path.split('#')[1] ? path.split('#')[1].split('/') : '';
    const page = parts[0] || ''; // finale
    // const page = parts[0] || 'viewTodo' //finale
    // const page = path === '' ? 'view1' : path.slice(1);

    // Any other info you might want to extract from the path (like page type),
    // you can do here
    let query;

    try {
        query = search ? JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}') : {};
    } catch (err) {
        query = {};
    }
    return {
        page,
        query,
        parts,
    };
};