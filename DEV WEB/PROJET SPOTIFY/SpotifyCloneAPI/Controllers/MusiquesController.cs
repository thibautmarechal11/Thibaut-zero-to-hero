using Microsoft.AspNetCore.Mvc;
using SpotifyCloneAPI.Models;

namespace SpotifyCloneAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MusiquesController : ControllerBase
    {
        // C'est ici que nous allons créer notre méthode !
        [HttpGet]
    public IEnumerable<Musique> GetToutesLesMusiques()
    {
        List<Musique> musiqueList = new List<Musique>();
        musiqueList.Add(new Musique
        {
            Id = 1,
            Titre = "Shape of You",
            Artiste = "Ed Sheeran",
            Album = "Divide",
            Duree = 233,
            Link = "https://www.youtube.com/watch?v=JGwWNGJdvx8"
        });
        musiqueList.Add(new Musique
        {
            Id = 2,
            Titre = "Blinding Lights",
            Artiste = "The Weeknd",
            Album = "After Hours",
            Duree = 200,
            Link = "https://www.youtube.com/watch?v=4NRXx6U8ABQ"
        });
        musiqueList.Add(new Musique
        {
            Id = 3,
            Titre = "Levitating",
            Artiste = "Dua Lipa",
            Album = "Future Nostalgia",
            Duree = 203,
            Link = "https://www.youtube.com/watch?v=TUVcZfQe-Kw"
        });
        musiqueList.Add(new Musique
        {
            Id = 4,
            Titre = "Bad Guy",
            Artiste = "Billie Eilish",
            Album = "When We All Fall Asleep, Where Do We Go?",
            Duree = 194,
            Link = "https://www.youtube.com/watch?v=DyDfgMOUjCI"
        });
        return musiqueList;
        // C'est ici qu'on va créer et renvoyer notre liste de musiques
    }
    }
}