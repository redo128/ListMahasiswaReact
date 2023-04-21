import React from "react";
import './BlogPost.css'
import Post from "./Post";
class BlogPost extends React.Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat:"Pandaan",
            hp:12321321,
            angkata:"2020",
            status:"aktif"
        }
    }
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }
    componentDidMount() {
        this.ambilDataDariServerAPI()
    }
    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })///////Dihapus nanti
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }
    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }
    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }
    render() {
        return (
            //   <div class="post-artikel">
            //     <h2>Daftar Artikel</h2>
            //     <div class="artikel">
            //         <div class="gambar-artikel">
            //             <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
            //         </div>
            //         <div class="konten-artikel">
            //             <div class="judul-artikel">Judul Artikel</div>
            //             <p class="isi-artikel"></p>
            //         </div>
            //     </div>
            //   </div>
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">nim</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nama" name="nama" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} nim={artikel.nim} nama={artikel.nama} id={artikel.id} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
                {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
            </div>
        )
    }
}

export default BlogPost;