import db from "../dados/data.json";

//filtra os dados pelo parametro recebido e se tiver a vercom região ou nome será filtrado e retornado
export function filtra(id) {
    return db.filter((dado) => dado.translations.pt.toLowerCase().includes(id.toLowerCase()) || dado.region.toLowerCase().includes(id.toLowerCase()))
}