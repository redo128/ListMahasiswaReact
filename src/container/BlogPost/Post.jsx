import React from "react";
const Post=(props)=>{
    return(
          <div className="artikel">
              <div className="gambar-artikel">
                  <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
              </div>
              <div className="konten-artikel">
                  <div className="nim">{props.nim}</div>
                  <p className="nama">{props.nama}</p>
                  <p className="nama">{props.id}</p>
                  <button className="btn btn-sm btn-warning" onClick={()=> props.hapusArtikel(props.id)}>Delete</button>
              </div>
          </div>
          )
}
export default Post;