namespace SpotifyCloneAPI.Models
{
    public class Musique
    {
        public int Id { get; set; }
        public string? Titre { get; set; }
        public string? Artiste { get; set; }
        public string? Album { get; set; }
        public int Duree { get; set; }
        public string? Link { get; set; }
    }
}