import {
  request
} from '@/plugins/request'


// 获取
export const getProfile = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}

// follow
export const followProfile = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

// unfollow
export const deleteProfile = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}