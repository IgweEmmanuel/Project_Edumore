# from rest_framework.permissions import BasePermission

# class IsOwnerOrReadOnly(BasePermission):
#     """
#     Custom permission to allow only owners of an object to edit it.
#     Assumes the model instance has a `user` attribute.
#     """

#     def has_object_permission(self, request, view, obj):
#         # Read permissions are allowed to any request,
#         # so we'll always allow GET, HEAD, or OPTIONS requests.
#         if request.method in ['GET', 'HEAD', 'OPTIONS']:
#             return True
        
#         # Instance must have an attribute named `user`.
#         return obj.user == request.user


# class IsTeacher(BasePermission):
#     """
#     Custom permission to allow only teachers to access a view.
#     Assumes the user model has an `is_teacher` attribute.
#     """

#     def has_permission(self, request, view):
#         return request.user.is_authenticated and request.user.is_teacher
