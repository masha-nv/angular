import { HttpClient, HttpClientModule } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { map, Observable } from "rxjs"


interface IUser {
  id: number,
  name: string,
  email: string,
  address: IAddress
}
interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo
}

interface IGeo {
  lat: string,
  lng: string
}

@Injectable()
export class UserResolver implements Resolve<IUser> {
  constructor(private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    console.log(route)
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((res: any) => res[0])
    )
  }
;

}
