import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { WINDOW } from '../../_config/config'

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';

function getParams() {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.queryParams.pipe(pluck('id'))
}

@Component({
  selector: 'app-window-chaches',
  templateUrl: './window-caches.component.html',
  styleUrls: ['./window-caches.component.scss']
})

export class WindowCachesComponent {
  todo: any
  _window = inject(WINDOW)
  constructor(){
    getParams().subscribe(params => console.log('params', params))
  }

  getTodoAndStoreInCache() {
    this._window.caches.open('todo-cache').then(cache => {
      fetch(TODO_URL).then(response => {
        const clonedResponse = response.clone();
        cache.put(TODO_URL, clonedResponse);
        response.json().then(todo => {
          this.todo = todo
        })
        return response
      })
    }).catch((error: HttpErrorResponse) => {
      throw new Error(error.message)
    })
  }

  getTodoFromCache() {
    this._window.caches.open('todo-cache').then(cache => {
      cache.match(TODO_URL).then(cachedResponse => {
        if (cachedResponse) {
          cachedResponse.json().then(todo => {
            this.todo = todo
          })
          return cachedResponse
        }
        return this.getTodoAndStoreInCache()
      })
    }).catch((error: HttpErrorResponse) => {
      throw new Error(error.message)})
  }

}
