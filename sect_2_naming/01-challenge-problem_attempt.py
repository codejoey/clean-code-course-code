class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, origin, length, height):
        self.origin = origin
        self.length = length
        self.height = height

    def get_area(self):
        return self.length * self.height

    def print_coordinates(self):
        top_right = self.origin.x + self.length
        bottom_left = self.origin.y + self.height
        print('Starting Point (X)): ' + str(self.origin.x))
        print('Starting Point (Y)): ' + str(self.origin.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_rectangle():
    rectangle_origin = Point(50, 100)
    rectangle = Rectangle(rectangle_origin, 90, 10)

    return rectangle


my_rect = build_rectangle()

print(my_rect.get_area())
my_rect.print_coordinates()
