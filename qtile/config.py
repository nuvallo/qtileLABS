from libqtile.config import Key, Screen, Group, Drag, Click
from libqtile.lazy import lazy
from libqtile import layout, bar, widget
from typing import List  # noqa: F401

mod = "mod4" # Windows key

keys = [
    # Switch between windows in current stack pane
    Key([mod], "j", lazy.layout.down()),
    Key([mod], "k", lazy.layout.up()),
    Key([mod], "h", lazy.layout.left()),
    Key([mod], "l", lazy.layout.right()),
    Key([mod, "shift"], "j", lazy.layout.shuffle_down()),
    Key([mod, "shift"], "k", lazy.layout.shuffle_up()),
    Key([mod, "shift"], "h", lazy.layout.shuffle_left()),
    Key([mod, "shift"], "l", lazy.layout.shuffle_right()),
    Key([mod, "mod1"], "j", lazy.layout.flip_down()),
    Key([mod, "mod1"], "k", lazy.layout.flip_up()),
    Key([mod, "mod1"], "h", lazy.layout.flip_left()),
    Key([mod, "mod1"], "l", lazy.layout.flip_right()),
    Key([mod, "control"], "j", lazy.layout.grow_down()),
    Key([mod, "control"], "k", lazy.layout.grow_up()),
    Key([mod, "control"], "h", lazy.layout.grow_left()),
    Key([mod, "control"], "l", lazy.layout.grow_right()),
    Key([mod, "shift"], "n", lazy.layout.normalize()),
    Key([mod], "Return", lazy.layout.toggle_split()),

    # Switch window focus to other pane(s) of stack
    # Key([mod], "space", lazy.layout.next()),
    
    # Window spawns
    Key([mod], "Return", lazy.spawn("st")),
    Key([mod, "shift"], "Return", lazy.spawn('thunar')),
    Key([mod], "s", lazy.spawn('slack')),
    Key([mod], "w", lazy.spawn('firefox')),
    Key([mod], "e", lazy.spawn('code-oss')),
    Key([mod], "n", lazy.spawn('leafpad')),


    #dmenu
    Key([mod], "d", lazy.spawn("dmenu_run -i -nb '#191919' -nf '#FFA500' -sb '#FFA500' -sf '#191919' -fn NotoMonoRegular:bold:pixelsize=14")),

    # Toggle between different layouts as defined below
    Key([mod], "Tab", lazy.next_layout()),
    Key([mod], "q", lazy.window.kill()),
    Key([mod], "f", lazy.window.fullscreen()),

    Key([mod, "control"], "r", lazy.restart()),
    Key([mod, "shift"], "x", lazy.shutdown()),
    Key([mod], "r", lazy.spawncmd()),
]

groups = [Group(i) for i in "12345"]

for i in groups:
    keys.extend([
        # mod1 + letter of group = switch to group
        Key([mod], i.name, lazy.group[i.name].toscreen()),

        # mod1 + shift + letter of group = switch to & move focused window to group
        Key([mod, "shift"], i.name, lazy.window.togroup(i.name, switch_group=True)),
        # Or, use below if you prefer not to switch to that group.
        # # mod1 + shift + letter of group = move focused window to group
        # Key([mod, "shift"], i.name, lazy.window.togroup(i.name)),
    ])

# colors
colors = ['#cccccc', '#333333', '#67C7EB', '#000000', '#565554', '#632249']

layouts = [
    #layout.Tile(border_focus=colors[2], border_normal=colors[1], border_width=2, margin=5),
    # layout.Stack(num_stacks=2, border_focus=colors[2], border_normal=colors[1], border_width=2, margin=5),
    layout.Bsp(border_focus=colors[2], border_normal=colors[1], border_width=2, margin=5),
    layout.Max(border_focus=colors[2], border_normal=colors[1], fullscreen_border_width=2, margin=5),
    layout.Matrix(border_focus=colors[2], border_normal=colors[1], border_width=2, margin=5),
]

widget_defaults = dict(
    font='sans',
    fontsize=12,
    padding=3,
)
extension_defaults = widget_defaults.copy()



# status bar
screens = [
    Screen(
        top=bar.Bar(
            [
                widget.Sep(padding=5, linewidth=0),
                widget.WindowName(foreground = colors[2]),
                widget.TextBox('Battery: ', foreground = colors[2]),
                widget.Battery(format="{percent:2.0%}", foreground = colors[0]),
                widget.Sep(padding=10, foreground = colors[4]),
                widget.Clock(format='%H:%M', foreground = colors[2]),
                widget.Sep(padding=5, linewidth=0),
            
            ],
            24,
        ),
    
        wallpaper='~/.config/qtile/wall.png',
        wallpaper_mode='fill',
    ),
]

# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front())
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: List
main = None
follow_mouse_focus = True
bring_front_click = False
cursor_warp = False
floating_layout = layout.Floating(float_rules=[
    # Run the utility of `xprop` to see the wm class and name of an X client.
    {'wmclass': 'confirm'},
    {'wmclass': 'dialog'},
    {'wmclass': 'download'},
    {'wmclass': 'error'},
    {'wmclass': 'file_progress'},
    {'wmclass': 'notification'},
    {'wmclass': 'splash'},
    {'wmclass': 'toolbar'},
    {'wmclass': 'confirmreset'},  # gitk
    {'wmclass': 'makebranch'},  # gitk
    {'wmclass': 'maketag'},  # gitk
    {'wname': 'branchdialog'},  # gitk
    {'wname': 'pinentry'},  # GPG key password entry
    {'wmclass': 'ssh-askpass'},  # ssh-askpass
])
auto_fullscreen = True
focus_on_window_activation = "smart"

def autostart():
    lazy.spawn('xcompmgr')


# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"
