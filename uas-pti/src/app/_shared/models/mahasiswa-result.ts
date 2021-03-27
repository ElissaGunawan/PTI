export interface MahasiswaResult {
    info: string;
    result: {
        alamat: string;
        angkatan: string;
        created_at: string;
        email: string;
        foto: string;
        id: string;
        nama_lengkap: string;
        nim: string;
        prodi: string;
        tanggal_lahir: string;
        updated_at: string;
    };
}

export interface dataRegister{
    username: string;
    telepon: string;
    email: string;
    nama_lengkap: string;
    alamat: string;
    tanggal_lahir: string;
    foto: string;
    password: string;
}

export interface dataLogin{
    username: string;
    password: string;
    remember_me: boolean;
}

export interface mahasiswa{
    created_at: number;
    email: string;
    foto: string;
    id: number;
    nama_lengkap: string;
    nim: string;
    update_at: number;
}

export interface dataHome{
    info : string;
    result : {
        count: number;
        mahasiswa : mahasiswa[];
    }
}

export interface dataUpdate{
    nama_lengkap : string;
    alamat : string;
    tanggal_lahir : string;
    foto : string;
    password : string;
}
