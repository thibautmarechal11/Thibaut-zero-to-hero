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
            id = 1,
            title = "Shape of You",
            artist = "Ed Sheeran",
            image = "Divide",
            duree = 233,
            file = "songs/Ed Sheeran – Shape of You (Lyrics).mp3"
        });
        musiqueList.Add(new Musique
        {
            id = 2,
            title = "Blinding Lights",
            artist = "The Weeknd",
            image = "After Hours",
            duree = 200,
            file = "songs/The Weeknd - Blinding Lights (Lyrics).mp3"
        });
        musiqueList.Add(new Musique
        {
            id = 3,
            title = "Levitating",
            artist = "Dua Lipa",
            image = "Future Nostalgia",
            duree = 203,
            file = "songs/Dua Lipa - Levitating (Lyrics).mp3"
        });
        musiqueList.Add(new Musique
        {
            id = 4,
            title = "Bad Guy",
            artist = "Billie Eilish",
            image = "When We All Fall Asleep, Where Do We Go?",
            duree = 194,
            file = "songs/Billie Eilish - bad guy (Lyrics).mp3"
        });
        return musiqueList;
        // C'est ici qu'on va créer et renvoyer notre liste de musiques
    }
    }
}