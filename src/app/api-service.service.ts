import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http'
import { map} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';





@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: Http) { 
    console.log('Hello ApiServiceService Provider');
  }

  urlx= 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0f5cd17-fe74-4296-bbf5-8e2aceef9558/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45C5GRVRXV%2F20190419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190419T055429Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCcR6RPmGNJMnVLeICKfCLoMnlD%2BRRjpwSIg3gqxoI4dwIhAOQN92pXFlwSIqopWLTWxVtZXr7t%2B1FT1rhW3TWJnVhjKtoDCFMQABoMMjc0NTY3MTQ5MzcwIgy%2BcvWM4lvDJ4B0a4UqtwPnrM3p65nJg5aFIbyA7iofQZHh5OPuaMaXy8MMMckuRfTIIkwHXz4Bv0AXdFYQ0X8BIeN7ENsG%2B9MZETyo43VEtZozCaHXkKXWjg5g2cXshB9aGc%2Beh%2FV7lJXYSAS14gGVl12ZOIj5JMk4gnCm6wnsvw48Wonm0iO%2BA5yi0iwGJ0Vd7qe78CCmeWjvY8C4jHzyMNDe7%2Fuydo1NZJxqwVFCg2H7qqhKqLl1UKxO8D93ow4MvwH6GK%2FAVfTMq6BgPkZb4yZJ085ijOgebJWF5AoRlhikBAc%2B%2FOyXkIHlLT3buJLfp6O%2FSKR4CuGGPy8VPT5U8mmWzBMAo2bxJq4sBcnuEBy5vmQEExWWWIhb2AsRAL8a7Mi%2F9IuTMXap03XMWMrHWI6ahGhAZdEY1aIPTSC97Wt5ag9WaqfuHLAt7M5G4tBVeF0TM9HTgMvDXV1X0R1hcWMnjFWL92qpkpCDu%2BJTUT5BGrRT140FCrabf0CWXZUZrqKDOZvSjpngDo88U4bAo5kTXak7WuzAVNnkOb62H1k0eqrjugCy5G%2FZO3mTahu1hBpzXpD%2Fsq9%2BXYruMwPdbseGjyf7MOvH5OUFOrMBmHp5Xtbr23TV6gOFmaeX59Kr5gvJNGbQKItkov7MEsafiTy1Z%2BLPtE3YPhTRUzwEBwT%2Fs642NY9UDVbNs1qe6SjN2gTg4I9r9jzG2Osu9s8fLij6xzkUG0M%2B%2FfxDXaQ8Yyubd1mLH%2FF%2BeGgBtPVEg0kywZHi23lAKLqrAqEpBabZr12dJppBTgNI9sYll2MctzP7sqSuw46i3mnt5wD%2FPX7U%2FIvdwM8mgnDfrlIE3S%2F4rxU%3D&X-Amz-Signature=cb1c74929a91c9de4d4a5bfc1cb05dcc14012dbed98e0348145972c0e89c0a74&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22';
  
  //ALL USERS
  api_url_all = 'http://localhost:3000/api/allinfluencers';
  getAllInfluencers(){
    return this.http.get(this.api_url_all).pipe(map((response) => response.json()));
  }

  //SINGLE USER
  api_url_single = 'http://localhost:3000/api/getsingleinfluencer';
  getSingleInfluencer(username: string){
    return this.http.get(this.api_url_single, {params:{'username':username}}).pipe(map((response) => response.json()));
  }

  //INTERESTS
  api_url_interest = 'http://localhost:3000/api/getInterest';
  getInterests(interest: string){
    return this.http.get(this.api_url_interest, {params:{'stats.interests':interest}}).pipe(map((response) => response.json()));
  }

  //FOLLOWER COUNT (x,y)
  api_url_count = 'http://localhost:3000/api/getCount';
  getCount(x:number, y:number){
    return this.http.get(this.api_url_count, {params:{x, y}}).pipe(map((response) => response.json()));
  }

  //keyword
  api_url_keyword = 'http://localhost:3000/api/getKeyword';
  getKeyword(keyword: string){
    return this.http.get(this.api_url_keyword, {params:{'keyword':keyword}}).pipe(map((response) => response.json()));
  }




  getforupload(){
    return this.http.get(this.urlx).pipe(map((response) => response.json()));
  }
  additem(newinf){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('adding item');
    return this.http.post('http://localhost:3000/api/addinfluencer', newinf, {headers : headers});
  }






  //private extractData(res: Response) {
    //   let body = res;
    //   return body || { };
    // }
  
  // url= 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0f5cd17-fe74-4296-bbf5-8e2aceef9558/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45C4YJZJJ3%2F20190418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190418T180420Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDK3oz1Ma%2BJgqOiYOl%2Fq%2BlG%2Bin7fYnr0%2BCe906jTwqGJAIhAKgKxw97Ouxejsha%2B2xO9dl4EtMz8QNKw0AC8u6%2FLDO4KtoDCEsQABoMMjc0NTY3MTQ5MzcwIgzFHNwf1KuQW1lS6RkqtwORY2UIv4dlkH7HbhSDNffghZqZUvpFvDhVUYQZgb717LWu0o%2BPzS1M0AyNVdBaKPEdWEZFip0zK%2Bvd%2BJWqFMmLsx3kcwgJrFw9t7O70uMJt58uf76XI7m0Q0n1Uda0Nekz%2FoXPQuECH%2BMxMfaHA%2BgnsJsqlTGfSIQC7yXjNW3ygSR3n30M11bH6OCCg74PtzICmGlKQg%2BR%2BQOZKGqZqor%2B2Y2DWAB6DA1jOrxPgAxtNUNc7YmKqr1oZ3dZi9uRkHPJDeSlu8XpGX%2FHZxa13si7O8Z8V7bN24UPj5zbPCqtgecTYJeyLx860i2JBaXAV%2B4c73WG2RpOlt9lhFwYU6thSMkvdHXQU3nRZJZz1KxfSdHBrE86L34Gk8jJbv3aI1T4l2ud22Np6zBBvemokbFLO7PytWQ9U%2FSQbC%2FJ3BjWHrcOLO090FQihnv8GkKYhTyLnwfB4MfKJMxL20iRjw0qKTMPexx31bcBNtDsmsyYHOMECIa3mqKnV52EMzZ4PjwNMXb6K1f12ujb9PdHAJ%2FVKpEBoKKRQ%2Bu18ZgWqAaAPrzqetEcs3C6lFHcRGWIhh8j3rP8M5n6MJvv4uUFOrMBOgn9o2f4BHVAZ4CvhPCyBhBLQspRLgxD52PX%2B2qQb%2B5jwWcpCoz4UFgWnd3KMD%2Fi6Y2JHFoR9kXGn3vvjbX0yWbhWZJM46tnGu5WD0vff5soHwZkK9fkAvaV%2BKFUzzN7c5wprtTaVCIwlRYd2EyRMbI%2BOqEH9p65LpTmbVaWgqHia3Z3vz%2FOaJlLRsH37rNIiBhvcFBdEFKTXDQ9eY4AymfEuTRDIU8OMAouk%2FSMLku%2BGiU%3D&X-Amz-Signature=057496a69ac863cd13d34761f4f7ed3847dfb16536889fcb02cd7dd6eef3dbcd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22';
  
  
  
  //
}
