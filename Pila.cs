using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica_1
{
    //EJERCICIO 4

    public class Pila : Coleccionable
    {
        private List<Comparable> datos = new List<Comparable>();
                

        public void apilar(Comparable c)
        {
            this.datos.Add(c);
        }
        
        public Comparable desapilar()
        {
            if (!this.esVacia())
            {
                Comparable temp = this.datos[-1];
                this.datos.RemoveAt(-1);
                return temp;
            }
            else
            {
                throw (new Exception("La pila esta vacia!"));
            }
            
        }

        public Comparable tope()
        {
            return this.datos[-1];
        }

        public bool esVacia()
        {
            return this.datos.Count == 0;
        }

        /* metodos de la interface */

        public int cuantos()
        {
            return this.datos.Count;
        }

        public Comparable minimo() {
            Comparable temp = this.datos[0];
            foreach (Comparable c in this.datos)
            {
                if (c.sosMenor(temp))
                {
                    temp = c;
                }
            }
            return temp;
        }

        public Comparable maximo()
        {
            Comparable temp = this.datos[0];
            foreach (Comparable c in this.datos)
            {
                if (c.sosMayor(temp))
                {
                    temp = c;
                }
            }
            return temp;
        }

        public void agregar(Comparable elem)
        {
            this.apilar(elem);
        }

        public bool contiene(Comparable elem)
        {
            foreach (Comparable c in this.datos)
            {
                if (c.sosIgual(elem))
                {
                    return true;
                }
            }
            return false;
        }

    }
}
