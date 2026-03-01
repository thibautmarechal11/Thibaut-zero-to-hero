using Microsoft.EntityFrameworkCore;
using SpotifyCloneAPI.Models;

namespace SpotifyCloneAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // C'est ici qu'on indique à la base de données de créer une table pour nos musiques
        public DbSet<Musique> Musiques { get; set; }
    }
}